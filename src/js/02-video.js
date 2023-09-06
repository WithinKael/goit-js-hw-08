import throttle from "lodash.throttle";
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const buttonEl = document.querySelector('a');
const player = new Player(iframe);

let time = localStorage.getItem('videoplayer-current-time');

if (time !== null) {
    player.setCurrentTime(time);
}

const onTimeUpdate = function(event) {
    localStorage.setItem('videoplayer-current-time', event.seconds);
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));

buttonEl.addEventListener('click', () => {
    localStorage.clear();
});


// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const simpleListEl = document.querySelector('.gallery');

function simplePhotosMarkup (array){
    const markup = array.map((element) => {
        return `
        <li class="gallery__item">
          <a class="gallery__link" href="${element.original}">
            <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
          </a>
        </li>`
    }).join('\n');
    return markup;
};

function renderSimplePhotosMarkup() {
    const markup = simplePhotosMarkup(galleryItems);
    simpleListEl.innerHTML = markup;
}
renderSimplePhotosMarkup(galleryItems);

let gallery = new SimpleLightbox('.gallery a', { docClose: false, captionsData: 'alt', captionDelay: 250});
// console.dir(gallery);


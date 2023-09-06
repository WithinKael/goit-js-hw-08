import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const gobackEl = document.querySelector('p');
let myObject = {};

gobackEl.addEventListener('click', () => {
    localStorage.clear();
})

//FORM---------------------------------------------------------------------------------------------------------------
const fillFromElements = () => {
    const userData = localStorage.getItem("feedback-form-state");
    
    if (userData === null) {
        return;
    }

    try {
        const parsedUserdata = JSON.parse(userData);
        formEl.elements.email.value = parsedUserdata.email;
        formEl.elements.message.value = parsedUserdata.message;
        myObject.email = parsedUserdata.email;
        myObject.message = parsedUserdata.message;
    } catch (error) {
        console.log(error.message);
    }
};

fillFromElements();

const onFormEl = throttle(event => { 
    myObject.email = formEl.elements.email.value;
    myObject.message = formEl.elements.message.value;
    
    const jsonObject = JSON.stringify(myObject);
    localStorage.setItem("feedback-form-state", jsonObject);
}, 500);
formEl.addEventListener('input', onFormEl);


//BUTTON--------------------------------------------------------------------------------------------------------------
const onFormSubmit = event => {
    event.preventDefault();
    formEl.elements.email.value = "";
    formEl.elements.message.value = "";

    if (!myObject.email || !myObject.message) {
        localStorage.removeItem("feedback-form-state")
        return; 
    }

    if (Object.keys(myObject).length > 0) {
        console.log(myObject);
        myObject = {};
    } 
    localStorage.removeItem("feedback-form-state");
}

formEl.addEventListener('submit', onFormSubmit);

// Add an event listener to the window object for the 'scroll' event
window.addEventListener("scroll", function () {
    // Inside the event listener function

    // header Selection:
    // This is a reference to the <header> DOM element on the web page.
    const header = document.querySelector("header");

    // classList:
    // It's a property of DOM elements for manipulating classes.
    // toggle Method:
    // Toggles/updates the presence of a class based on a boolean condition.
    header.classList.toggle("navbar-scrolled", window.scrollY > 0);

    // window.scrollY:
    // Represents the current vertical scroll position.
    // If greater than 0, the user has scrolled down the page.
});



const mobile = document.querySelector('.mobile')
const header = document.querySelector('.header')

const press = () => {
    // alert("hello")
    header.classList.toggle("active");
}

mobile.addEventListener('click', () => press())

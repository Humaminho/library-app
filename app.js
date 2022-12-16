//ELEMENTS

const openPopUp = document.querySelector("[data-pop-up-target]");
const closePopUp = document.querySelector("[data-close-btn]");
const overlay = document.querySelector("#overlay");
const deleteAll = document.getElementById("delete-all");

const book = document.querySelector(".book");
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const pages = document.querySelector(".pages");

const read = document.querySelector(".read");
const remove = document.querySelector(".remove");

// const prototypeBook = {
//     title: "The first book",
//     author: "Li 7wak",
//     pages: "800",
//     isRead: true,
// };

const log = console.log;

let myLibrary = []; //array of objects (books)

class Book {
    constructor(title,author,pages,isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    };
};

openPopUp.addEventListener("click", () => {
    const popUp = document.querySelector(button.dataset.popUpTarget);
    openPopUp(popUp);
});
function openPopUp(popUp,overlay) {
    if ( popUp == null) return;
    popUp.classList.add("active");
    overlay.classList.add("active");
};
function closePopUp(popUp,overlay) {
    if ( popUp == null) return;
    popUp.classList.remove("active");
    overlay.classList.remove("active");
};
function addBookToLibrary() {

};



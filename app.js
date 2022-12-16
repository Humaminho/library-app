//ELEMENTS
const log = console.log;

const openPopUpBtn = document.getElementById("open-pop-up")
const closePopUpBtn = document.getElementById("close-pop-up");
const overlay = document.getElementById("overlay");
const deleteAll = document.getElementById("delete-all");

const titleValue = document.getElementById("title-input").value;
const authorValue = document.getElementById("author-input").value;
const pagesValue = document.getElementById("pages-input").value;
const readValue = document.getElementById("title-input").value;
const addBookButton = document.getElementById("add-book");

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



let myLibrary = []; //array of objects (books)

function openPopUp(popUp) { //show and hide pop-up
    if ( popUp == null) return;
    popUp.classList.add("active");
    overlay.classList.add("active");
};
function closePopUp(popUp) {
    if ( popUp == null) return;
    popUp.classList.remove("active");
    overlay.classList.remove("active");
};

openPopUpBtn.addEventListener("click", () => {
    const popUp = document.querySelector(".pop-up");
    openPopUp(popUp);
});
closePopUpBtn.addEventListener("click", () => {
    const popUp = document.querySelector(".pop-up");
    closePopUp(popUp);
});
overlay.addEventListener("click", () => {
    const popUp = document.querySelector(".pop-up");
    closePopUp(popUp);
});
class Book {  //book constructor
    constructor(title,author,pages,isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    };
};
function render() {

};

addBookButton.addEventListener("click", () => {
    createBook();
});

function createBook(titleValue, authorValue, pagesValue, readValue) {
    if (!titleValue && !authorValue && !pagesValue) log("zbi");
    const book1 = new Book(titleValue, authorValue, pagesValue, readValue);
    log(book1);
};



//ELEMENTS
const log = console.log;

const popUp = document.querySelector(".pop-up");
const openPopUpBtn = document.getElementById("open-pop-up")
const closePopUpBtn = document.getElementById("close-pop-up");
const overlay = document.getElementById("overlay");
const deleteAll = document.getElementById("delete-all");

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
    openPopUp(popUp);
});
closePopUpBtn.addEventListener("click", () => {
    closePopUp(popUp);
});
overlay.addEventListener("click", () => {
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

function createBook() {
    let titleValue = document.getElementById("title-input");
    let authorValue = document.getElementById("author-input");
    let pagesValue = document.getElementById("pages-input");
    let readValue = document.querySelector('input[type="checkbox"]:checked');

    if (!titleValue.value | !authorValue.value | !pagesValue.value) return;
    if (readValue) {
        readValue = "true";
    } else readValue = "false";

    const book = new Book(titleValue.value, authorValue.value, pagesValue.value, readValue);
    myLibrary.push(book)

    log(myLibrary)
    titleValue.value = "";
    authorValue.value = "";
    pagesValue.value = "";

    document.getElementById("read-input").checked = false;

    closePopUp(popUp);
};
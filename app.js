//ELEMENTS

const addBtn = document.getElementById("add-book");
const deleteBtn = document.getElementById("delete-all");

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

const zbi = new Book("messi","li7wak","55","true");
log(zbi)
function addBookToLibrary() {

};



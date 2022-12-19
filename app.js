//ELEMENTS
const log = console.log;

const popUp = document.querySelector(".pop-up");
const openPopUpBtn = document.getElementById("open-pop-up")
const closePopUpBtn = document.getElementById("close-pop-up");
const overlay = document.getElementById("overlay");
const deleteAllBtn = document.getElementById("delete-all");
const addBookButton = document.getElementById("add-book");

const books = document.querySelector(".books")
const book = document.querySelector(".book");
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const pages = document.querySelector(".pages");

const read = document.querySelector(".read");
const remove = document.querySelector(".remove");

let myLibrary = [];

function openPopUp(popUp) {
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
    myLibrary.push(book);

    // Clear inputs:
    titleValue.value = "";
    authorValue.value = "";
    pagesValue.value = "";
    document.getElementById("read-input").checked = false;
    books.innerText = "";

    renderBooks(myLibrary);
    closePopUp(popUp);
};

function renderBooks(myLibrary) {
    
    books.innerText = "";

    for ( let i = 0 ; i < myLibrary.length ; i++ ) {
        
        const book = document.createElement("div");
        book.setAttribute("data-index", `${i}`);
        books.appendChild(book);
        book.classList = "book";
        
        const title = document.createElement("div");
        title.innerText = myLibrary[i].title;
        book.appendChild(title);
        title.classList = "title";

        const author = document.createElement("div");
        author.innerText = `By ${myLibrary[i].author}`;
        book.appendChild(author);
        author.classList = "author";

        const pages = document.createElement("div");
        pages.innerText = `${myLibrary[i].pages} pages`;
        pages.classList = "pages";
        book.appendChild(pages);
    
        const remove = document.createElement("button");
        remove.innerText = "✖";
        remove.classList = "remove";
        book.appendChild(remove);
        remove.addEventListener("click", () => {
            removeBook(book);
        });
    
        const read = document.createElement("button");
        if ( myLibrary[i].isRead == "true" ) {
            read.innerText = "Read";
            read.classList.remove("not-read");
            read.classList.add("read");
        } else {
            read.innerText = "Not read";
            read.classList.remove("read");
            read.classList.add("not-read")
        };
        read.addEventListener("click", () => {
            toggleReadState(book)
        });
        book.appendChild(read);
    };
    if ( books.innerText == "" ) {
        books.innerText = "Click Add book to create your first book!"
        books.classList.remove("books");
        books.classList.add("books-empty");
    } else {
        books.classList.remove("books-empty");
        books.classList.add("books");
    };
};

function removeBook(book) {
    const targetIndex = book.getAttribute('data-index');
    myLibrary.splice(targetIndex, 1);
    log(myLibrary);
    renderBooks(myLibrary);
};

function toggleReadState(book) {
    const targetIndex = book.getAttribute('data-index');
    if (myLibrary[targetIndex].isRead == "true") {
        myLibrary[targetIndex].isRead = "false";
    } else myLibrary[targetIndex].isRead = "true";
    renderBooks(myLibrary);
};

deleteAllBtn.addEventListener("click", () => {
    myLibrary = [];
    renderBooks(myLibrary);
});

renderBooks(myLibrary)
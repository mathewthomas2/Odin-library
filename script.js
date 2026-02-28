const myLibrary = [];

function Book (title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addToLibrary (title, author, pages, readStatus) {
    const book = new Book(title, author, pages, readStatus);
    myLibrary.push(book);
}

const form = document.querySelector(".details");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("page_no").value;
    const readStatus = document.getElementById("readStatus").checked;

    addToLibrary(title, author, pages, readStatus);
    displayBooks();
    form.reset();
});



function displayBooks() {
    const bookShelf = document.querySelector(".bookShelf");
    bookShelf.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const card = document.createElement("div");
        card.classList.add("book-card");
        
        const title = document.createElement("h3");
        title.textContent = book.title;
        
        const author = document.createElement("p");
        author.textContent = "Author: " + book.author;

        const page = document.createElement("p");
        page.textContent = "Pages: " + book.pages;

        const read = document.createElement("p");
        if (book.readStatus) {
            read.textContent = "✓ Read";
            read.classList.add("status", "read");

        }
        else {
            read.textContent = "✗ Not Read";
            read.classList.add("status", "unread");

        }

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");

        deleteButton.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            displayBooks(); 
        });

        card.append(title, author, page, read, deleteButton);

        bookShelf.appendChild(card);
    });
}
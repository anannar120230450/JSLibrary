/* book object:
{
    read: BOOL,
    title: STRING,
    author: STRING,
    pageCount: STRINGNUM
}
*/
const library = [];
const htmlElements = {
    addNewBookBtn: document.getElementById("add-new-book-btn"),
    contentBooksView: document.querySelector(".content-books-view"),
};

window.addEventListener("DOMContentLoaded", () => {
    ////////// add new project btn event ///////////
    htmlElements.addNewBookBtn.addEventListener("click", () => {
        addToLib("Ever", "hhas", "235", true);
        renderLib();
    });
});

function Book(title, author, pageNum, read) {
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.read = read;
};

Book.prototype.toggleRead = () => {
    this.read = !this.read;
};

function addToLib(title, author, pageNum, read) {
    library.push(new Book(title, author, pageNum, read));
};

function renderLib() {
    // reset book view
    htmlElements.contentBooksView.innerHTML = "";
    library.forEach(book => {
        const newBookCardElement = document.createElement("div");
        newBookCardElement.classList.add("book-card");
        newBookCardElement.innerHTML = `
            <div class="book-card-header">
                <p>${book.title}</p>
            </div>
            <div class="book-card-info">
                <p class="book-card-info-author">${book.author}</p>
                <p class="book-card-info-pages">${book.pageNum}</p>
            </div>
            <div class="book-card-tooling">
                ${function() {
                    // check if the book.read bool value if true add class list
                    if (book.read) {
                        return `
                            <button class="book-card-read-button">
                            ${function() {
                                if (book.read) {
                                    return "Read";
                                } else if (!book.read) {
                                    return "Unread";
                                };
                            }()}
                        `
                    } else if (!book.read) {
                        return `
                            <button class="book-card-read-button unread">
                                ${function() {
                                    if (book.read) {
                                        return "Read";
                                    } else if (!book.read) {
                                        return "Unread";
                                    };
                                }()}
                            </button>
                        `;
                    };
                }()}
            </div>
        `;

        htmlElements.contentBooksView.appendChild(newBookCardElement);
    });
};
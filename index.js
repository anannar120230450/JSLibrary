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
    addNewBookFormBackdrop: document.querySelector(".add-new-book-form-backdrop"),
    addNewBookFormTitleInput: document.querySelector("#add-new-book-form-title-input"),
    addNewBookFormAuthorInput: document.querySelector("#add-new-book-form-author-input"),
    addNewBookFormPagesInput: document.querySelector("#add-new-book-form-pages-input"),
    addNewBookFormReadCheckboxInput: document.querySelector("#add-new-book-form-read-checkbox-input"),
    addNewBookFormAddBtn: document.querySelector("#add-new-book-form-add-btn"),
};

window.addEventListener("DOMContentLoaded", () => {
    // initial book examples
    addToLib("Crime And Punishment", "Fyodor Dostoevsky", "527", true);
    renderLib();

    // add new book header button
    htmlElements.addNewBookBtn.addEventListener("click", () => {
        htmlElements.addNewBookFormBackdrop.style.display = "flex";
        /*addToLib("Ever", "hhas", "235", true);
        renderLib();*/
    });
    // add new book form button
    htmlElements.addNewBookFormAddBtn.addEventListener("click", () => {
        addToLib(htmlElements.addNewBookFormTitleInput.value, htmlElements.addNewBookFormAuthorInput.value, htmlElements.addNewBookFormPagesInput.value, htmlElements.addNewBookFormReadCheckboxInput.checked);
        renderLib();
        htmlElements.addNewBookFormBackdrop.style.display = "none";
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
                <p class="book-card-info-pages">${book.pageNum} Pages</p>
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
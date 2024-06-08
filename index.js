/* book object:
{
    read: BOOL,
    title: STRING,
    author: STRING,
    pageCount: INT
}
*/
const library = [];
const htmlElements = {
    contentBooksView: document.querySelector(".content-books-view"),
};

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
}
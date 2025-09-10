function printBookinfo(book) {
    return console.log("Title:".concat(book.title, ",Author:").concat(book.author, ",Pages:").concat(book.pages, ",Available:").concat(book.isAvilable));
}
var book1 = {
    title: "abc",
    author: "chetana",
    pages: 100,
    isAvilable: true
};
var book2 = {
    title: "xyz",
    author: "chetana",
    pages: 108,
    isAvilable: false
};
console.log(printBookinfo(book1));
//console.log(printBookinfo(book2));

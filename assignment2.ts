interface Book{
title:string;
author:string;
pages:number;
isAvilable:boolean;
}

function printBookinfo(book:Book):void{
    console.log('Title:${book.title},Authot:%{book.author},Pages:${book.pages},Available:${book.isAvailable}');
}

const book1:Book={
    title:"abc",
    author:"chetana",
    pages:100,
    isAvilable: true
};

const book2:Book={
    title:"xyz",
    author:"chetana",
    pages:108,
    isAvilable:false
};
console.log(printBookinfo(book1));
console.log(printBookinfo(book2));

interface Book{
title:string;
author:string;
pages:number;
isAvilable:boolean;
}

function printBookinfo(book:Book):void{
    return console.log(`Title:${book.title},Author:${book.author},Pages:${book.pages},Available:${book.isAvilable}`);  
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

function wrapInArray(item) {
    return [item];
}
var userResponse = {
    sucess: true,
    data: { id: 1, username: "chetana" }
};
var bookResponse = {
    sucess: true,
    data: ["abc", "100", "xyz"]
};
console.log(wrapInArray(10));
console.log(wrapInArray("Hello"));
console.log(userResponse);
console.log(bookResponse);

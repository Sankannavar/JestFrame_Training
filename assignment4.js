function logInput(input) {
    if (typeof input === "string") {
        console.log(input.toUpperCase());
    }
    else {
        console.log("Number:".concat(input * input));
    }
}
;
logInput(5);
logInput("Hello");

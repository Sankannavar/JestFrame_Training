function fetchData() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Hello");
        }, 2000);
    });
}

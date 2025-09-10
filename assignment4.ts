function logInput(input:number|string): void{
        if (typeof input === "string") {
            console.log(input.toUpperCase());
        }else{
             console.log(`Number:${input*input}`);
        }  
};

logInput(5);
logInput("Hello");
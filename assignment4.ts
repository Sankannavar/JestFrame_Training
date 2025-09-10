function logInput(input:number|string): void{
    if(typeof(input==="number"){
        console.log('Number:${input*input}');
    }else{
         console.log('String:${input.toUpperCase()}');
    }
}

logInput(5);
logInput("Hello");
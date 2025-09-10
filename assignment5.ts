function wrapInArray<T>(item:T):T[]{
    return [item];
}

interface ApiResponse<T>
{
 sucess:boolean;
 data:T;   
}

type User={
    id:number;
    username:string;
};

const userResponse:ApiResponse<User>={
    sucess:true,
    data:{id:1,username:"chetana"}
};

const bookResponse:ApiResponse<string[]>={
    sucess:true,
    data:["abc","100","xyz"]
};

console.log(wrapInArray(10));
console.log(wrapInArray("Hello"));

console.log(userResponse);
console.log(bookResponse);



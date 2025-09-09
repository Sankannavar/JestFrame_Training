class person{
    name:string;
    age:number;
constructor(name:string,age:number){
    this.name=name;
    this.age=age;
}

introduce():void{
    console.log('Hi,I am ${this.name} and I am ${this.age} year old.');
}
}

class student extends Person{
    studentId:number;
    constructor(name:string,age:number,studentId:number){
        super(name,age);
        this.studentId=studentId;
    }

    study():void{
        console.log('Student ${this.name} is studying.');
    }
}
}

const student1=new student("Chetana",30,101);

student1.introduce();
student1.study();

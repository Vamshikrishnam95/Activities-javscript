class Student{

    /*Using Private access modifier  we can access property only within that class where it is declared*/
       private id: number;

    /*Using public access modifier we can  access property anywhere like 
    1) When creating objects or creating instance of a class we can access the property
    2) When taking inheritance of class we can access the property
    3) within in a class 
    */
    public name: string;

    /*Using Protected access modifier we can access property only in below cases
    1)  When taking inheritance of class we can access the property
    2) within that class where it is declared
    */

    protected age: number;
    
    constructor(name: string,age:number){
        this.name = name;
        this.age = age;
        this.id = 1;
      
    }

    compute(){
        console.log("Hello " + this.name + "Good Morning" + " My Id is" + this.id + " & my age is" + this.age);
    }
}

class Hobby extends Student{

    constructor(name: string,age:number){
        super(name,age);
    }

    hobbies(){
        console.log("My name is " + this.name + this.age);//In this case we can access public and protected but not id which is of type private access modifier
    }
}

const st1 = new Hobby('rahul',18);
//while taking instance we get only name property , compute(), hobbies() because the property which is having private and protected can be accessible only within and inheritance of that  class.

let newName = st1.name;
st1.hobbies();
st1.compute();
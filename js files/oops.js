console.log("js file is activated successfully");

// javascript is a object oriented langugae. i.e., we can represent the real life things here. creation of object is a basic requirement in javascript to match the real life entities with their characters.

// *** object creation

// type-1 : we can create object directly using curly brackets.writing their properties as (key:value) pairs.If u write a function inside the object then it is called as a method.
const car = {
    // name:"maruti",
    // model:"maruti 800",
    // topSpeed:100,
    // status:function(){                      // we write function name as key name .
    //     console.log("car is running now");
    // },
    display(){                             // we can also write methods directly instead of like prev method.
        console.log(`${this.model} has top speed of ${this.topSpeed}kmph `);          
    }
};


// *** constructor concept
/* constructor concept was used to make the object creation easy if we've to create more no.of objects,
here (this), (new) keywords plays a key role. constructor follows pascal convention just to differentiate it with normal functions.
*/

function CarModel(carCompanyName, topSpeeds){
    this.carName = carCompanyName,            // carName variable was used as the object property's name. we've to use this keyword so that it will point towards the created empty object and creates a new property name.
    this.topSpeed = topSpeeds
    this.displaySpeed = function() {
        console.log(`The ${this.carName}  top-speed is ${this.topSpeed}`);
    }

};

let benzCar = new CarModel("benz",180); // new keyword will create a new empty object with the given name here benzCar = {},
let nexon = new CarModel("tata",200);

console.log(benzCar.displaySpeed());   // checking whether the properties are successfully invoked into the new empty object. 
console.log(nexon.displaySpeed());   
// console.log(this);                     // here this keyword is pointing towards the global object.


function testing() {
    this.pname="kiran";
    console.log(`hello testing 'this' keyword   ${this.pname}`);
};

testing();


//  ******* Object prototypes   ********

let city = {
    name:"vizag",
    greet() {
        console.log(`welcome to ${this.name}`);
    }
}

city.greet();

// const myDate = new Date();
let myObject =new Date();

do {
  myObject = Object.getPrototypeOf(myObject);
  console.log(myObject);
} while (myObject);

// Date.prototype
// Object {...}
// null

const personPrototype = {
    greet() {
      console.log('hello!');
    }
  }
  
  const carl = Object.create(personPrototype);
  carl.greet();  // hello!
  

//      *************    Classes In Javascript      ****************

// classes are used for creating a blueprint of our objects. class directly dont do anything it will makes us understanding the code easier.

/* here we take a eg of creating a school model where we have to store details of professors and students
   but these to classes will have a common properties like name etc.So instead of creating the name two times in each class
   we just create a common class which stores the data and methods common to both the classes. This common class will be the 
   parent class for the two child classes Professor and students */


class Person {              // Class name will follow Pascal convention i.e it starts with the capital letter.

    name;                   // here we wrote the property name as name. But it is not necessary becoz anyway we initial the propertyin the constructor.

    constructor(name) {     // this will creates the new objects of this class.
        this.name = name;
    };

    introduceSelf() {
        console.log(`Hi, my name is ${this.name}`);
    }
};

/* Now we'll create the child class named Professor here we "extends" keywords as we inherit the some properties of person class. 
   This concept is called AS INHERITANCE */


class Professor extends Person {

    teaches;

    // here we're making the salary property as private so that it cant be accessible outside the class. use #before that property name.It should be initialized at the start of the class.
    #salary;

    constructor(name, subjName,salary) {
        // here after creating the constructor we first inherit the properties from the parent class using "super()" keyword.
        super(name); 
        // Then we create the its own properties.               
        this.teaches = subjName;
        this.#salary = salary;
    };

    /* here we are again same method Becoz this class will have different introduction. This is called overriding
       here this method is using a concept called POLYMORPHISM  */

    introduceSelf() {
        console.log(`Hi, I am ${this.name}, I will be your ${this.teaches} Professor `);
    };

    designation() {
        if(this.#salary >= 50000){
            console.log(`${this.name} is a Senior Professor`); 
        } else {
            console.log(`${this.name} is a Junior Professor`);
        }
    }

} 


class Student extends Person {

    #standard;
    constructor(name, standard) {
        super(name);
        this.#standard = standard;

    }

    introduceSelf() {
        console.log(`Hi, I am ${this.name}. I am studying ${this.standard}th class`);
    }

    canStudyArchery() {
        return this.#standard > 1;
      }
};

// creating a object of professor class
const govindhRao = new Professor("Govindh Rao", "Maths", 60000);
govindhRao.introduceSelf();
govindhRao.designation();
console.log(govindhRao.name);      // It will display name
console.log(govindhRao.salary);    // it will display undefined as it is a private property.

// creating a object of student class
const sai = new Student("sai charan", 10);
sai.introduceSelf();
console.log(sai.canStudyArchery());


//      ********** Excercise on classs  ***************


class Library {
    constructor(booksList) {
        this.availableBooks = booksList;

        this.bookList = booksList;
        this.issuedBooks = {};
    }

    getBookList() {
       
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

   
         
    

    issueBook(bookName,user) {
        
        if(this.issuedBooks[bookName] == undefined) {
        this.issuedBooks[bookName] = user;
        
        console.log(`book is issued`);
        } else {
            console.log("this book is already issued");
        }
        
      
    }

    returnBook() {
        delete this.issuedBooks.bookName;
        console.log(this.issuedBooks);
    }
}
console.log("************  excercise solution  *************");
const clgLib = new Library(["telugu", "hindi", "english"]);

console.log(clgLib.issueBook("telugu","kiran"));
// console.log(clgLib.issueBook("telugu","ram"));
// console.log(`at present these books are available ${clgLib.getBookList()}`);
// *******************  D.O.M CONCEPTS   ************************


console.log("DOM CONCEPTS");


/*getElementById is a DOM object method where it returns the details of the specified element info ..in this method you have to give 
only ID name but not anything else as the name itself suggests it can get data related to specified  ID . 
It will return null value if no ID with that name is available*/

let a = document.getElementById("two"); //we're storing this method return value in the variable.
// a = a.className;  // It will store the className of the 'one' id. 
a.innerText = "Mumbai indians(It was changed using javascript Dom)"; // This property will change the text inside that specified ID.
a.innerHTML = '<h3>mumbai indians</h3>';
a.style.color='red';    // This will change the color of the element . here style name was important without that it won't be executed.  
// console.log(a);      // It'll print the return val stored in the varible.

let b = document.getElementsByClassName("lines"); //This will return multiple elements in that class. The data will be stored as an Array.
// console.log(b);

/*querySelector is used to select the first element of the specified id,class,tag name
while selectong the class name we have to use dot(.) to let the method understand that it was a class, For id it must be (#) */

let c = document.querySelector(".lines");
// console.log(c);

let d = document.getElementsByTagName("p"); //used to select elements by tag names. It creates a html collection.
console.log(d);

// Array.from(d).forEach(element => {  //Here we're converting the HTML collection of 'd' varibale into an array so that we can update the data insode those tags.
//     console.log(element);           
//     element.style.color="green"; // we are making all the p tags to the greeen color.
// })

let e = document.querySelectorAll("a");  //This will select all the elements present with that class,tag name.
// console.log(e);

Array.from(e).forEach(element => {
    console.log(element);
    element.style.color="green";
})

//  *****************  DOM Traversal Properties and Methods   ******************

let f = document.querySelector(".lines");

console.log(f);
console.log(f.children);                // It'll display only the HTML elements not any new line text, comment as a child.
console.log(f.childNodes);              // It'll display the nodes available in the given selector. Nodes contain text,comment other than elements.
console.log(f.childNodes[1].nodeName);  // This'll display the name of the asked node.
console.log(f.firstChild);              // Displays the 1st child Node.
console.log(f.firstElementChild);       // Displays the 1st element of the given selector.
console.log(f.lastChild);
console.log(f.lastElementChild);
console.log(f.childElementCount);                    // Displays the no.of elements present in the particular selector.
console.log(f.firstElementChild.nextElementSibling); // Displays the sibling element of the given element.
console.log(f.firstElementChild.nextSibling);        // Displays the sibiling node of the given element.    


// console.log("********* exercise solution      ********");
// console.log("   ");
// console.dir(document);
// let val = document.body.children[5];
// let newVal = val.parentElement;
// console.log(val);
// console.log(val.nextElementSibling);
// console.log(newVal);
// val = document.getElementById("heading");
// console.log(val);
// let val2= document.querySelector(".para");
// console.log(val2);
// val2.innerText="sai charan ";



//            ***************  Creating New Elements  *******************

// Step-1 :- Creating new element and writing some content in that.

let newElem = document.createElement("a");
// newElem.href = "https://google.com";
newElem.innerHTML=`<br><a href = "www.google.com">Google home page</a> (It was inserted using javascript)`;

// Step-2:- Get access to the parent element where you want to store this new element.

let store = document.querySelector(".para");

// step-3:- Using 'appendChild()' we can insert that new element to the parent element.

store.appendChild(newElem);


//   *************  Moving Elements ***************

// Step-1 :- Select the element which u want to move.
let moveElem = document.getElementById("two");
console.log(moveElem);  // just verifying whether selected the correct element.

//  Step-2 :- Select the element to where u will insert the desired Element next to it.
let sam = document.getElementById("three");

// Step-3:- using the insertBefore method we can move the elements.
// insertBefore('Deni mundu insert cheyali anukuntamo aa elem', 'A elem ni insert cheyali anukuntamo aa element')
moveElem.parentElement.insertBefore(sam, moveElem);


//    ************** Removing Existing Elements  *************

let elemClass = document.querySelector(".links a");  // Selects the 1st class of name 'links' in that 1st Anchor tag.
console.log(elemClass);
elemClass.remove();  



//    *****************  EVENTS CONCEPT  **********************

let sample = document.querySelector("#heading");
console.log(sample);

sample.addEventListener("click", function(){
    // sample.textContent = "you clicked this!!";
    // location= "//www.facebook.com";
    sample.innerHTML= "<a href = https://www.facebook.com target=_blank>facebook</a>";
    
    console.log(sample);
})

// function clicking(){
//     document.querySelector("#three").textContent="clicked it successfully";
// }


    
//      ************** LOCAL STORAGE & SESSION STORAGE    *****************



localStorage.setItem("name", "sai");  // stores data as key-value pair.
localStorage.getItem("name");         // retrieves the stored data in the local storage.
localStorage.removeItem("name");      // removes the particular key-value pair .
localStorage.clear();                 // clears whole localstorage data at a time.


let details = {                       // created an object.
    name: "sai charan",
    age:23
}

// console.log(details);

let covertingToString = JSON.stringify(details);  // before storing the object into localstorage it must be converted into string becoz localstorage can't store objects data direcly.
localStorage.setItem("details", covertingToString); 

// let convertingToObject = JSON.parse("details");
let parsedValue = JSON.parse(localStorage.getItem("details"));     // whenever we want to retrive tha object data as an object instead of string we will use this function.
console.log(parsedValue);                         // prints the data as an object.


// NOTE :- localstorage and session storage has the same properties the only diff is their expiry time.




console.log("Js file activated");

// let a = document.links;
// console.log(a);   // Printing just to know whether we're able to access the reqd data .

// let reqName = "google";

// Array.from(a).forEach(element => {
//     // console.log(element);
//     let address = element.href;
//     // console.log(address);
//     if (address.includes(reqName)) {
//         console.log(address);
//     }


// })

let eventNames = document.getElementById("event");
let button     = document.getElementById("submitBtn");
// console.log(eventNames);   
typeof eventNames;

function upperCase() {
    console.log(eventNames.value);
    eventNames.value = eventNames.value.toUpperCase();  // This'll convert the lowerCase letters to upperCase letters.
    localStorage.setItem("name", eventNames.value);
}

// eventNames.addEventListener("blur",upperCase);
// let store = localStorage.setItem("value", eventNames.value);


let details = {
    name: "sai charan",
    age:23
}

// console.log(details);

let covertingToString = JSON.stringify(details);
localStorage.setItem("value", covertingToString);

// let convertingToObject = localStorage.getItem("details");
// JSON.parse(convertingToObject);

let parsedVal = JSON.parse(localStorage.value);
// console.log(parsedVal);



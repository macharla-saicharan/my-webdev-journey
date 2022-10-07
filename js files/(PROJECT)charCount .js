console.log("working");                          // Testing purpose

let personName = document.querySelector("input");
let remainingChars = document.querySelector("#remainingChars");

console.dir(personName);                         // just to know the properties of that element.

let maxLengthVal = personName.maxLength;         // In HTML input element maxlength prop was available 'maxLength' in DOM props.

function countRemChars(event) {
    let enteredText = event.target.value;        // This'll store the data of entered text.
    console.log(enteredText);
    let enteredTextLength = enteredText.length;  // This'll find the no.of characters entered.

    let remainingNum = maxLengthVal - enteredTextLength;

    remainingChars.textContent = remainingNum;

    if (remainingNum <= 5) {
        personName.style.backgroundColor = "#e95656";    // As soon as the no.of available characters becomes 5 then bg-color turns red just as a warning sign.

     } else {
        personName.style.backgroundColor = "#56e989";    /* At early stages of creating this project asigned default green value in css in Html.
                                                         But if the rem chars are less than 5 and then if del the chars it was not changed to green again. So, then i started experimenting and created a else block to resolve it.
                                                         To understand more clearly comment out the else block and try entering chars...*/
    }

    if (remainingNum == 0) {
        alert("sorry entered Max no.of characters");      // This'll show a popup msg .
    }

}


personName.addEventListener("input", countRemChars);
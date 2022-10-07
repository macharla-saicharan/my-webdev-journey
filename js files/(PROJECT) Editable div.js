

/*In this mini-project we are creating a div in the javascript and inject it into a html page,
  Then we are converting that div element into an editable content..by using eventlisteners..
  Then storing the edited data into localstorage so eventhough we refresh the page or open it in
  the future . it must show the updated eidted content.


  Eventhough it looks simple but the concept behind this project was bit logical as a beginner i felt hard
  at first to get understand about this concept..and with patience understanding the question bit by bit 
  could able to solve it. 

  At first attempt i was so frustrated as i couldn't able to understand the question but later on re-reading 
  the question i got the concept. Eventhough it took me almost 1.5 days to solve it completely finally happy 
  that it boosted my confidence in the learning of javascript :)
*/ 

let parent = document.getElementById("editableDiv");   // accessing the parent element.

let para = document.getElementById("ownPara");         // accessing the element before which u want insert the new element.

let newDiv = document.createElement("div");            // creating the new div element.

newDiv.setAttribute("id", "newDiv");
newDiv.textContent = "Hello..!, this is an editable div u can change the content here...";

newDiv.setAttribute("style", "font-color: blue; border: 2px solid red; font-family: 'Lucida Console', monospace; padding: 4px;width:fit-content");  // adding css to the new element.


console.log(parent, para, newDiv);          // checking in the console whether we're able to access all the reqd elements at a time.

//parent.appendChild(newDiv);   
parent.insertBefore(newDiv, para);      // inserting the new element before the existing para element using insertBefore method.


newDiv.addEventListener("click", editing);

function editing() {

    let noOfInputElem = document.getElementById("newElem");
    // console.log(noOfInputElem);

    if (noOfInputElem == null) {
        let inpt = document.createElement("input");
    // setting properties of the new input element

        inpt.setAttribute("type", "text");
        inpt.setAttribute("id", "newElem");
        inpt.setAttribute("value", newDiv.textContent); // this value property will insert that text content into the input box.
        inpt.setAttribute("style", "width:100vw");



        // console.log(inpt);

        newDiv.appendChild(inpt);

        inpt.addEventListener("blur", function () {
            newDiv.innerText = inpt.value;
            localStorage.setItem("editedText", inpt.value);


        })

    }

}
/* The reason to create a val variable is to make the content updated i.e., after editing the content if i refresh or open that 
page in future it should show me only the edited content */

let val = localStorage.getItem("editedText"); 
console.log("localstorage value = " + val);
if (val == null) 
{
    newDiv.textContent = "Hello..!, this is an editable div u can change the content here...";
} else {
    newDiv.textContent = val;
}
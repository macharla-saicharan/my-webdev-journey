
console.log("js file is activated"); // Just to know whether successfully connected the html page to js file.
showNotes();                         // This function was written at start becoz as soon as we open that html page this function will work.




let addBtn = document.getElementById("addBtn");  // accessed to save the note when we click the save button.

// just creating these two event listners for better user interface.

let addTxt = document.getElementById("addTxt");
let addTitle = document.getElementById("addTitle");

// Below we are adding same event listener properties to two elements at a time.
[addTxt , addTitle].forEach(item =>{
    item.addEventListener("focus", function(){
    item.style.backgroundColor="#FFCC99";})
});
[addTxt , addTitle].forEach(item =>{
    item.addEventListener("blur", function(){
    item.style.backgroundColor="#FFFFFF";})
});


// This will store the data written in text area into the local storage so that we can acess the data in future or we can store notes.

addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");    // discussed about this portion below.
    if (notes == null) {
        savedNotes = [];
    } else {
        savedNotes = JSON.parse(notes);
    }
    // **** Update-1  ****
    // This object will store the title , text, date content inside it
    let myObj =
    {
        title:addTitle.value,
        text:addTxt.value,
        savedDate:new Date().toDateString()
    }
       
    
    savedNotes.push(myObj);  // we are now adding the elements of myObj  which are inturn objects into the the savednotes array. So now savednotes is array of objects, previously it was an array of strings.
    localStorage.setItem("notes", JSON.stringify(savedNotes));
    addTxt.value = '';
    addTitle.value = '';

    
    showNotes();

})


function showNotes() {


    let notes = localStorage.getItem("notes");  //wrote this again becoz we created them in the eventlistener so they are not in global scope.
    if (notes == null) {
        savedNotes = [];
    } else {
        savedNotes = JSON.parse(notes);
    }

    let emptyString = '';          // created an emptystring just to show the saved notes in the frontend.

    
    // created the loop to store all the notes.
    savedNotes.forEach(function (element, index) {
        // let notes = getElementById("notes");
        // here + sign was imp becoz if we dont write that it will show only the note which we saved at that time eventhough all notes are saved in local storage.
        // using backticks (``), just to insert html elements inside the note cards.
        emptyString += `
        <style>
            .noteCard:hover{border:2px solid blue;border-radius:15px;flex-wrap:wrap;jalign-items:center};
            @media screen and (max-width:600px) {
                .noteCard:{align-items:center;background-color:aqua;};
                
            }
            
            
        </style>
        
        <div class="noteCard mx-2 my-2 card" style="width: 18rem"> 
        <div class="card-body">
          <h5  class="content card-title">${element.title}</h5>
          <p class="content card-text">${element.text}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary"> Delete </button> &nbsp;
          <button id="${index}" onclick="edit(this.id)"    class ="editBtn btn btn-primary">Edit   </button> &nbsp; <br>
          <span id = "savedDate">${element.savedDate}</span>
        
        </div>
      </div>`

    } );
    
    // this is just to show default msg if there is no saved notes.
    let savedNoteCard = document.getElementById("notes");
    if (savedNotes.length != 0) {
        savedNoteCard.innerHTML = emptyString;
    } else {
        savedNoteCard.innerHTML = `<br> There are no notes here. Start storing the notes`;

    }

}
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        savedNotes = [];
    } else {
        savedNotes = JSON.parse(notes);
    }
    savedNotes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(savedNotes));
    showNotes();   // this function wrote here again just to show the remaining notes available.
}



//This section written to make searchbar work, i.e., when we search the words it should filter the content which matches with that word.


let searchInput = document.getElementById("searchTxt");
// console.log(searchInput);
searchInput.addEventListener("input", function () {
    let inputVal = searchInput.value.toLowerCase();
    // console.log(inputVal);
    let savedNoteCards = document.getElementsByClassName("noteCard");
    // console.log(savedNoteCards);

    // savedNoteCards is a html collection which is similar to array but not a array. so converting that html collection to array.
    Array.from(savedNoteCards).forEach(element => {
        // let cardText = element.getElementsByClassName("card-text")[0].innerText;
        // console.log(cardText);
        if (element.innerText.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })
});

function edit(index) {

    let addTxt = document.getElementById("addTxt");
    let content = document.getElementsByTagName("p")[index];
    let addTitle = document.getElementById("addTitle");
    

    
    let notes = localStorage.getItem("notes");    // discussed about this portion below.
    if (notes == null) {
        savedNotes = [];
    } else {
        savedNotes = JSON.parse(notes);
    }

    addTxt.innerText   = content.innerText;
    addTitle.innerText = savedNotes[index].title;
    console.log(savedNotes[index].title);
    
    savedNotes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(savedNotes));


    showNotes();
    
};   

    let editBtn = document.getElementsByClassName("editBtn");
    
    addBtn.addEventListener("click", function() {
           let refresh = window.location.reload(); 
    })
 



/*   ************     FOR YOUR INFORMATION     ****************


1). written some console logs at some places just to check whether we are able to access the targeted elements or not.

2). To save the notes in local storage we are creating a key-value pair, so the keyname we given here is "notes" and value name is "savedNotes"
    as we have to store more than 1 note we are creating an array to store the note data. but, wkt we can't store array direcctly into the
    localstorage. 
    so, we are first converting the array to string using JSON.stringify then using JSON.parse we are retrieving the data as an array.
 */
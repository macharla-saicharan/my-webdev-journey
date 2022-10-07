console.log("File activated successfully");

//        ************  asynchronous javascript   **************

/* There are lot of asynchronous methods like AJAX,Promises,Fetch API, callbacks */


/* Below is the AJAX model where we make http request using XML. 
         AJAX stands for Asynchronous Javascript And Xml. nowdays most webpages are not using xml instead using JSON  */ 


let btn = document.getElementById("btn");
let content = document.getElementById("content");
let parent = document.getElementById("parent");

btn.addEventListener("click", accessingData);

function accessingData() {

// First initiate the XML Object.

    const xhr = new XMLHttpRequest();
    
// Preparing the object with data that to be fetched from the server.

    xhr.open("GET","Rough Work.html", true);

// checking the progress of the request to the server

    xhr.onprogress = function() {
        console.log("Loading");
    }

// Creating the code what to do after we get the data we requested for
    xhr.onload = function() {
        if(this.status === 200) {  // http status 200 is equal to the response is ready.
            content.innerHTML = this.responseText;
            // console.log(content.innerHTML);
        } else {
            console.log("there is a error");
        }
    }

// open() method will prepare the data that to be requested . But it wont directly sends the request to server.
// To achieve that we have another method called send() .

    xhr.send();
    
    console.log("completed"); // This will executed 1st then the response will be executed becoz response will take some time meanwhile remaining functions and logs will be executed.
}

 var a=10;
 var a=15;

 b= 20;

 console.log("a val at  start "+a);  // a = 10

function my(x,y){
    console.log("x = "+x);
    console.log("a value in my func "+a); //a =20
    y = a +30;      //y=50
    console.log("y = "+y);
    const z = x+y;  // z=70
    return z + 10;  // 80
}

if(a<b) {
    var a = b;
    console.log("a value in if "+a); // a=20
    console.log("result "+my(a,b));

}

//            **********  CALLBACK FUNCTIONS   ***************

// A Function which is passed as a argument to another function is called a callback function.
console.log("*************   CALLBACK FUNCTIONS   *************");



function myQuote(quote,callback) {   // we can use any word in the place of callback.
    var statement = "My first quote is "+quote;
    callback(statement);  
}

function printQuote(q){
    console.log("direct callback func"+q);
}

myQuote("do as u wish", printQuote);




// setTimeout() is a global method which will execute the piece of code or function after specified time.

function myQuotes(quote,callback) {
    setTimeout(function() {
        var statement = "My first quote is "+quote;
        callback(statement);
    },6000);
}

function printQuote(q){
    console.log(q);
}
myQuotes("do as u wish", printQuote);


function serverRequest(query, callback){
    console.log(query);
    setTimeout(function(){
      var response = query + "full!";
      callback(response);
    },5000);
  }
  
  function getResults(results){ 
    console.log("Response from the server: " + results);
  }
  
  serverRequest("The glass is half ", getResults);


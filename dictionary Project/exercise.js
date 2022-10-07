console.log("Exercise solution");
console.log("creating a dictionary app which gives definitions for the given word");


let word = document.getElementById("word");
console.log(word);
let btn = document.getElementById("btn");
console.log(btn);
let definition = document.getElementById("definition");
console.log(definition);

// Below code is the JSON . It's string of data which can be converted to a js object and we can access data from that.
// *** Imp.Note *** Place the JSON data inside back ticks or quotes.
let result = `
{
    "word": "example",
    "results": [
      {
        "definition": "a representative form or pattern",
        "partOfSpeech": "noun",
        "synonyms": [
          "model"
        ],
        
        "derivation": [
          "exemplify"
        ],
        "examples": [
          "I profited from his example"
        ]
      },
      {
        "definition": "something to be imitated",
        "partOfSpeech": "noun",
        "synonyms": [
          "exemplar",
          "good example",
          "model"
        ],
        
        "derivation": [
          "exemplify",
          "exemplary"
        ]
      },
      {
        "definition": "an occurrence of something",
        "partOfSpeech": "noun",
        "synonyms": [
          "case",
          "instance"
        ],
        
        "derivation": [
          "exemplify"
        ],
        "examples": [
          "but there is always the famous example of the Smiths"
        ]
      },
      {
        "definition": "an item of information that is typical of a class or group",
        "partOfSpeech": "noun",
        "synonyms": [
          "illustration",
          "instance",
          "representative"
        ],
        
        "derivation": [
          "exemplify",
          "exemplary"
        ],
        "examples": [
          "this patient provides a typical example of the syndrome",
          "there is an example on page 10"
        ]
      },
      {
        "definition": "punishment intended as a warning to others",
        "partOfSpeech": "noun",
        "synonyms": [
          "deterrent example",
          "lesson",
          "object lesson"
        ],
        
        "derivation": [
          "exemplary"
        ],
        "examples": [
          "they decided to make an example of him"
        ]
      },
      {
        "definition": "a task performed or problem solved in order to develop skill or understanding",
        "partOfSpeech": "noun",
        "synonyms": [
          "exercise"
        ],
        
        
        "examples": [
          "you must work the examples at the end of each chapter in the textbook"
        ]
      }
    ],
    
    "pronunciation": {
      "all": "ɪɡ'zæmpəl"
    }
    
  }`;


btn.addEventListener("click", generateDef);
word.addEventListener("keypress", (e) => {
  if(e.key == "Enter") {
    e.preventDefault();
    //  alert(e.key );
     generateDef();
  }
 
});


// Finding the solution using AJAX

// function generateDef() {
//     const xhr = new XMLHttpRequest();

//     xhr.open("GET", "dictionary.html", true);

//     xhr.onprogress = function() {
//         console.log("page loading");
//     }

//     xhr.onload =  function() {
//         if(this.status === 200) {
//             let myObj = result['results'];  // This myObj will have array of results object.

//             console.log(myObj);             // This'll give a array of objects we can see that in console.
//             let str = "";
//             myObj.forEach((element)=>{
//                 str += `<li>${element.definition}</li>` // populating the data into a empty string
//             })
//             // After successfully inserting the data into the string .Now we'll insert that data into dom.
//             // If the element is a input then we've to use element.value or element.innerHTML.
//             definition.innerHTML=str;    
//         } else {
//             console.log("error");
//         }
//     }

// xhr.send();
// }

// Finding the solution using setTimeout

// function generateDef() {
//     console.log("started the function");

//     setTimeout(function() {
//         console.log("timeout function was executed");
//       let myObj = JSON.parse(result);  // we're first parsing the string data to a js object using json.parse().
//       console.log(myObj);
//       let myResults = myObj['results'] // accessing the properties of the object using bracket notation.
//       console.log(myResults);
//       let str = "";
//       myResults.forEach(element => {
//         str += `<li>${element.definition}</li>`;
//       });

//       definition.innerHTML = str;

//     },2000);
// }



// Answer using Promises concept.


// function generateDef() {
//  let myPromise = new Promise((resolve,reject ) => {

// let   condition = word.value;
// console.log(typeof condition);
//   if(condition != "") {
//     resolve();
//   } else {
//     reject();
//   }
// })

// myPromise.then(() => {
//    let myObj = JSON.parse(result);
//   let myResults = myObj["results"];
//     console.log(myResults);
//   let str = "";
//   myResults.forEach(element => {
//     str += `<li>${element.definition}</li>`
//   });
//   definition.innerHTML = str;
// }).catch(() => {
//   definition.innerHTML = `<li>Mundu word enter chey ra puvvaa</li> `;
//   console.log("error ");
// })
// }


// answer using fetch api


function generateDef() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e98607609cmshb42877e58f14cdcp1ce38fjsnf412e5b09c0f',
      'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
  };
  fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word.value}`, options)
    .then(response => response.json())
    .then((data) => {

      if (word.value != []) {

        if(word.value == "kalyan") {
          definition.innerHTML = `<em><strong>pedhaaa erripuku gaadu</strong></em>`

        }

        let str = "";
        let lists = data.list;
        console.log(lists.length);

        for (let i = 0; i < 3; i++) {

          str += `<div>
        <li><strong>${lists[i]["definition"]}</strong></li>
        Eg:- <em>${lists[i]["example"]}</em>
        </div>`;
        }


        definition.innerHTML = str;
        //console.log(lists) 
      } else {
        definition.innerHTML = `<em><strong>Please , Enter a word !!!</strong></em>`
      } 
        
      
      // console.log(data.list[0]["definition"])
    })

}

//

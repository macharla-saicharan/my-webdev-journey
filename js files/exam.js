console.log("activated");

// let input ='';

function wordCount(input) {
    // input = input.toString();
    console.log(typeof input);
    let capitalLtrs = input.toUpperCase();
    console.log(capitalLtrs);
    let arr = capitalLtrs.split(" ").length + 65;
    console.log(capitalLtrs.split(" "));
    console.log(capitalLtrs.split(" ").length);
    let noOfWords = String.fromCharCode(arr);
    console.log(noOfWords);

    
}

wordCount(`Hello 
sai`);
wordCount("44");



let num = document.getElementById("value");
console.log(num);

let newElem = document.createElement("p")
    newElem.innerHTML = `<label for="result">answer </label>
                           <input type="text" name="result" id="result" value = ""> `;

    let targetTag = document.getElementById("result");

    targetTag.appendChild(newElem);


num.addEventListener("keypress", function(e) {
    // console.log(e.target.value);
    myVal = e.target.value;
    let sum=0;
    for(i=1;i<=myVal;i++) {
        sum += i;
    }
    console.log(`Sum of first ${myVal} natural numbers is ${sum}`);
    
    newElem.innerHTML = `<label for="result">answer </label><input type="text" name="result" id="result" value = "${sum}"> `;
})


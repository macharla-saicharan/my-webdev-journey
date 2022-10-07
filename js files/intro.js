let student="sai charan"
console.log(student);
let val=null;
console.log(val)
let val1=undefined;
console.log(val1);
console.log("100" == 100);
console.log(typeof true)
console.log(10 ** 3);
console.log(20 ** 3);

let age=18;
if(age > 18 ) {
    console.log("Adult");
} 
else if(age == 18)
{
console.log("exactly adult")

} 
else{
    console.log("child");
}




 


                       //Usage of Function


 function sum(a,b)
 {
     let c= a +b;
     return c;
 }
export {sum}
sum(4,5);
 console.log(sum(3,4));

                   //String Functions

let para= "hi this is sai charan,";
para=para.concat(' i am from vizag,', ' done btech from raghu clg'); //THis is used to combine more than 1 string.
console.log(para);
console.log(para.length);               //This will print no.of characters stored in the 'para' string.
console.log(para.toUpperCase());       //This will convert all characters to uppercase.
console.log(para[2]);                 //This will show the word that was placed at the given number. i.e., at the 2nd position space was there so it'll print space on the console. Indexing start from 0. It was  represented by square brackets[].
console.log(para.indexOf('s'));      //This will show the index num of the given character, remember to write d character in the single quotes. eventhough 's' there multiple times in the para it will show the index of 1st s.
console.log(para.lastIndexOf('s')); // This will show the last appearance of 's'.
console.log(para.endsWith('hi'));  // This will return the boolean value . Here the para was not ended with 'hi', so it will return false.
console.log(para.includes('this'))  // THis will return boolean value i.e., If the given word is there it will return true.
console.log(para.substring(3,6));    //This will return the words which are from 3rd position to 5th position i.e., 6th place was not included.
console.log(para.slice(-5));          //This will return last words from the end.
console.log(para.split('t'));          //This will split the sentencec where t was there.
console.log(para.replace('hi','bye'));  //This will replace 1st 'hi ' with bye.

let concat = `hello 'sai', how are you doing?? `;  // one of the ways to concatenate strings is using back ticks.






                                // ARRAYS COCNCEPT



let marks = [89,87,56,45];
let mixed = ['orange', 'apple', 89];
let random=['sai',89,[1,4,6]];                        // We can create an array inside another array.
console.log('length of an array is '+marks.length);
console.log('length of an array is '+random.length);  //The inner array is considered as an single object.

let arr=[45,23,56,78,56];
arr[1]= 49;
arr.push(89,99,67);  // This will add items to the end of the array.
arr.unshift(0);     // This will add items to the start of the array.
arr.pop();
arr.shift();
arr.splice(1,3);

let arr1 = ['sai', 45, [5,78,56]];
 

let charan= 5 < 6;
let person = {peru: 'sai', age:45 }

// ACCESSING ALL THE ITEMS IN AN ARRAY USING for...of method.
const birds =['parrot', 'owl', 'pigeion'];
for(const hi of birds){console.log(hi);}

//DOING COMMON OPERATION TO ALL THE ITEMS OF AN ARRRAY USING ONE COMMAND

// for eg multiplying all the items of an array with 3
let arr2= [23,56,34,12];
export {arr2}; // this will export the copy of this variable to other js file.
function multiply(num)
{
    return num * 3;
}


const multiplication = arr2.map(multiply);
console.log(multiplication);


// Filtering the desired items into an new ARRAY

const arr3=[12,45,23,56,4];

function above18(num)
{
    return (num > 18);
}

const newArr= arr3.filter(above18);
console.log('The original array is '+arr3);
console.log('New array which filtered nums less than 18 '+'['+newArr+']');

// Converting between Arrays and Strings

const data = 'vizag, hyd, kakinada, kurnool';  // This is a String.
console.log(data.split(','));                  // This will split i.e., converting the string to array.
const arr4= data.split(',');                   // after splitting the individual items then storing those in the object i.e., array.
console.log('arr4 = '+arr4);
console.log('typeof arr4 is '+typeof arr4);
const join = arr4.join(',');                  // Now we are again converting the array back to string using string() function.
console.log('join = '+join);
console.log('typeof join is '+typeof join);
const str2=arr4.toString();




                               //USAGE OF FUNCTIONS



function greet(name, thank='bye')  //To thank we assigned an value because if thank variable doesnt have any value then that default val will be used.
{
    // console.log(`Hi ${name}, How are you, ${thank}`); // It'll directly print the message.
    let msg = `Hi ${name}, How are you,${thank}`; // It'll 1st store the msg then if we write the return statement it'll return that val.
    return msg;
}

let name2 = 'sai';
let name3= 'charan';


val = greet(name2);  // we can store the returned value into another then print it.
console.log(val);
greet(name3,'untanu mari');
console.log(greet(name3)); // We can directly print without storing it in another variable. i.e., we're here using function directly as an object.


const hello = function(name='sai'){   //Here this type of functions is called ANONYMOUS FUNCTION. There is no need to provide name to the function as we are storing the function in a variable.
    console.log(`hi ${name}`);
}
 
let name4= hello();

const numArr = [2,4,6];

const doubleArr = numArr.map(item => item * 2);  // This is the example of ARROW FUNCTION. using this function we can decrease no.of lines of code. To perform same operation at the line 92 in this code we used 4 extra lines of code.
console.log(doubleArr);


// alert('hello sai');
let av = innerWidth;
console.log(av);
// print();
// let abc=prompt('hi', 'sai');
// console.log(abc);
// confirm('are you okay');

let a = document.links;
console.log(a);
console.log(document.images);

console.log(document.links);

Array.from(a).forEach(function(element)
{
    if(element = "google"){
       console.log(element); 
    }
    
});






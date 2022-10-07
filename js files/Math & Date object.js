console.log("js file activated");

//       ***************   MATH OBJECT    *****************

//   *****  Below are some of the Math object properties  ******


let a = Math.SQRT2;
a = Math.SQRT1_2;         // returns square root of 1/2 i/e., 0.707....
a = Math.LN2;             // hover onto the blue color text to know about that.
a = Math.E;
a = Math.LOG2E;     

// console.log(a);           // returns square root of 2 i.e., 1.414...


//   *****  Below are the Math object methods    *******

let b = Math.round(3.4);
 b = Math.round(3.6);              // Round off to the nearest integer.
 b = Math.ceil(3.6);               // In our houses we've ceiling which is on the top..so here ceil returns nearest upper integer of the number.
 b = Math.ceil(-3.1);
 b = Math.floor(3.9);              // In our houses we've floor on the bottom so here floor returns the nearest lower interger of the number.
 b = Math.floor(-3.1);
 b = Math.trunc(-3.1);             // It will return the integer part of the value.
 b = Math.pow(5,6);                // It will return the value which is 5 power of 6 i.e., 5^6 = 15625.
 b = Math.sqrt(64);
 b = Math.abs(-5.6);
 b= Math.sin(90 * Math.PI / 180);  // This will give sin value of given angle in degrees
 b = Math.min(21,56,87,35,12,6);   // returns the smallest among given values.
 b = Math.log10(100);              // returns the value of log 100 to base 10 i.e., 2.
 b = Math.log2(2);                 // returns the value of log 2 to base 2  i.e., 1
 b = Math.random();                // returns a random value between 0 to 1.
 b = 100 * Math.random();          // returns a random value between 0 to 100.
 b = 10 + (100-10)*Math.random();  // returns a random value between 10 to 100.

 // if u want a random number between (a - b) then use formula [a + (b-a)*Math.random();]

 // if u want a random number between 30 and 50 then write as below

 b = 30 + (50-30)* Math.random();
//  console.log(Math.ceil(b));  // using math.ceil to print a integer value.


//           **********    DATE AND TIME OBJECT   *************

const today = new Date();  // This will print the date at that point of time.
d = today.toDateString();  // This will show only date by eliminating the time.
console.log(d);
console.log(today.getFullYear());  // returns the only year value of the stored date.
console.log(today.getMonth()+1);  // adding +1 will give month number as our general standards . js counts months from 0. It returns the num not the name.
const month = ["jan", "feb", "mar", "apr",  "may", "jun",  "jul",  "aug",  "sep" ,"oct", "nov", "dec"];
console.log(month[today.getMonth()]); // this way we can get the name of the month of the date.
// today.setDate(02);
// console.log(today.getDate());
console.log(today);

console.log("setting the custom date" +today.setFullYear(2020,11,3));
console.log("UTC DATE " + today.getUTCHours());


// console.log(new Date(69,08,10));
// console.log(new Date("dec 13,2014"));
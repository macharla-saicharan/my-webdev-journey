console.log('Regular Expressions');

let reg = /sai/gi;

let str = 'sai charan and om Sai ram';

/*    EXEC() METHOD USAGE */

console.log('******** EXEC() METHOD USAGE     *********** ');
// if use while loop and global flag then we get all the matches otherwise eventhough there is a global flag,
//we have to run the exec( ) method as many times as we need.
let arr;
while((arr = reg.exec(str)) !== null ) {
    let msg = arr
    console.log(msg,"next check starts at - ",reg.lastIndex);
}

console.log(reg.source);// It gives the string which was there inside the reg pattern here it is "sai"


/*     TEST() METHOD       */

console.log('******** TEST() METHOD USAGE    ************ ');

/* This method returns boolean value i.e., true or false. If reg1 value is there inside the str1 then it returns true or else false */
let reg1 = /hi/g;
let str1 = "hello hi charan and hi , how  are  you"
let dup = "hi this is me"
console.log("Using the test method -",reg1.test(str1),reg1.lastIndex)
// console.log("Using the test method -",reg1.test(str1))
// console.log("last index - ",reg1.lastIndex)

let count=0;

// while(reg1.test(str1)  == true) {
//     count++
//     console.log("last index - ",reg1.lastIndex)
// }

// let s = (count==1)?"":"s"
// console.log(`${reg1.source}, appears ${count} time${s} in the given string`);
console.log(reg1.test(dup),reg1.lastIndex)

/*       MATCH() METHOD */

console.log('**********  MATCH() METHOD USAGE ***************** ');
let reg2 = /hi/g;
let str2 = "hello hi charan and hi , how  are  you";

let result = str2.match(reg2);
console.log(result);


/*       SEARCH() METHOD */

console.log("******** SEARCH() METHOD USAGE   ************* ")

let reg3 = /hi/;
let str3 = "hello hi charan and hi , how  are  you";

let res = str3.search(reg3);
console.log(res); // gives the starting index num of the regexp match
console.log(str3[res]); // gives the string value of that index

/*        REPLACE() METHOD */

console.log("******** REPLACE() METHOD USAGE   ************* ")

let p1 = "hi ,sai charan";
console.log(p1.replace("sai","ram"));

let str4 = "hi, how are you?,how is your wife"
let reg4= /How/ig;
console.log(str4.replace(reg4,"who"));


/*   METACHARACTERS EXPLANATION */


/*  ********* [.] dot operator ************ */
console.log("********* usage of dot(.) character in regex *******")
let reg5 = /s.i/ig;
let str5 = "sai, ski,sfi,smiregdhi,spd";

console.log(`reg5 = /s.i/ig
str4 = " sai,ski,sfi,spd"
reg5.exec(str4) gives below result`)
let arr1;
while((arr1 = reg5.exec(str5)) !== null) {
    // let msg = arr1;
    console.log(arr1)
}

/* **********[*] operator  ********* */
console.log("*********** usage of (*) operator ***********");
let reg6 = /sai*c/ig;
let str6 = "hi sai,sacjay,sameer,srinu,ram,saicharan";
let arr2;
while((arr2 = reg6.exec(str6)) !== null) {
    console.log(arr2);
}

// console.log(str5.match(reg6))

/* ********** [+] operator  ********* */

console.log(`*********** usage of (+) operator ***********`);

let reg7 = /sai+/ig;
let str7 = "hi sai,sam,srinu";

let arr3;
while((arr3=reg7.exec(str7))!==null) {
    console.log(arr3);
}

/* ********** [?] operator  *********** */

console.log("*********** usage of (?) operator ***********");

let reg8 = /sai?h/ig;
let str8 = "hi sai,sam,smi,saiih";

let arr4;
while((arr4=reg8.exec(str8))!==null) {
    console.log(arr4);
}
// if(arr4 == null) console.log('null');
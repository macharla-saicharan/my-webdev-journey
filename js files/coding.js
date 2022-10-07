console.log("file activated");

// console.log( 6 / 3);
// console.log( 6 % 3);


// function factorial(n) {
//     console.log("Ur given input is "+n);
//     let arr = [];
//     for (i = 1; i <= n - 1; i++) {
//         arr.push(i);
//     }
//     console.log(arr);
//     let product = 1;
//     for (i = 0; i < n - 1; i++) {

//         product *= arr[i];

//     }
//     console.log("product of elements is "+product);
//     result = Math.floor(product % n);
//     console.log("modulus val is "+result);
//     if(result == 1) {
//         // console.log(arr);
//         console.log("true");
//         console.log(arr);
//         console.log("Highest length is "+arr.length);
//     } else {
//         console.log("executing the newFunc()");
//         newFunc(n-1);
//     }

// }

// function newFunc(a) {
//     let arr1 = [];
    
//     for (i = 1; i <= a - 1; i++) {
//         arr1.push(i);
//     }
//     console.log(arr1);
//     let product = 1;
//     for (i = 0; i < a - 1; i++) {

//         product *= arr1[i];

//     }
//     console.log("product of elements is "+product);
//     k = a + 1;
//     result = Math.floor(product % k);
//     console.log("modulus val is "+ result);

//     if(result == 1) {
//         console.log("true");
//         console.log(arr1);
//         console.log("The highest length is "+arr1.length);
//     } else {
//         console.log("false");
//         console.log("executing the factorial func()");
//         factorial(a-1);
//     }
// }

// factorial(5);


// function myFunc(n) {
//     console.log("input = "+n);

//     let prod = 1;
//     for(i=2;i<n;i++) {
//         prod *= i;
//     result = Math.floor(prod % n);
//     if(result == 1) {
//         return "output = " + i;
//     }
//     }
//     return "Output = "+1;
// }

function examAns(_input) {
    let lowercase = _input.toLowerCase();
    // inside the split after comma add space.
    let arr = lowercase.split(", ");

    // breaking the input into two strings
    let s1 = arr[0];
    let s2 = arr[1];

    // reverse those strings
    let revS1 = s1.split("").reverse().join("");
    let revS2 = s2.split("").reverse().join("");

    //removing the 1st element of each rev string
    let remStr1 = revS1.replace(revS1.charAt(0),"");
    let remStr2 = revS2.replace(revS2.charAt(0),"");

    // join both the strings and convert it as an array. so that we can add @ wherever necessary

    let concac = (remStr1 + remStr2).split("");

    // replace all the spaces with @

    for(i=0;i<= concac.length; i++) {
        if(concac[i] == " ") {
            concac[i] = "@";
        }
    }

    let finalStr = concac.join("");

    console.log(finalStr);
}
examAns("Iwa is@, Cake");


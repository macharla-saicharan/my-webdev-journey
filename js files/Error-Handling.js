console.log("Error handling");

// try catch method

let a = true;

try 
{
    if (a == true) { console.log("hello") }       // This line executes as there is no error.
    if (b == true) { console.log("2nd if cond") } // This line throws an error as there is no 'b' variable in the code.
                                                  // But if we dont want the JS engine to stop the whole script then use the try-catch block.                                              
  }
catch (error) { console.log("ERROR : "+error.stack) }              // here error is an error object which contain info abt error such as name and message.
finally { console.log("finally block is executed") } // by default this statement will be executed whether try or catch is executed.


let json = '{ "age": 30 }'; // incomplete data

try {
  user = JSON.parse(json); // <-- forgot to put "let" before user

  // ...
} catch (err) {
    if(err instanceof ReferenceError) {

    
  console.log(err); // JSON Error: ReferenceError: user is not defined
  // (no JSON Error actually)
}

}
console.log('*******************')

console.log("mototoootototot");

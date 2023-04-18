/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the `greetAndUppercase` function. This function uses
 *    Async/Await. How is this function different than a regular (non-async)
 *    function? What is its return type?
 *  
 *  Answer: The greetAndUppercase function is different from a regular (non-async) 
 *    function in that it makes use of async/await syntax to handle promises in a 
 *    more concise and synchronous-like manner. When a function is marked as async, 
 *    it means it will return a promise implicitly, even if a promise is not explicitly 
 *    returned in the function body.
 *    
 *    The return type of the greetAndUppercase function is a promise. It will return a promise 
 *    that resolves to the uppercased version of the greeting for the specified name, or rejects 
 *    with an error message if any of the promises (greet or uppercaser) within the function 
 *    return a rejected promise. The resolved value or the rejected error will be available when the 
 *    returned promise is resolved or rejected, respectively.
 * 
 * 2. Uncomment block #1 and run the code using `node challenge3.js`. What is
 *    printed when we use `greetAndUppercase` like a regular function?
 * 
 *  Answer: When a code is run as a regular functions it prints: "Promise { <pending> }"
 * 
 * 3. Uncomment block #2 and run the code again. What happens now?
 * 
 *  Answer: When the code is run as a promise, it prints: "HELLO THERE, DUCKY"
 * 
 * 4. Write an asynchronous method 'spacer' that takes a string as input and 
 *    returns the input string with a space added between each character. You 
 *    can use your solution from Part 3.
 * 
 *    Call 'spacer' in the `greetAndUppercase` method and run your code again.
 *    You should see something like:
 * 
 *    'H E L L O   T H E R E ,   D U C K Y'
 * 
 * 
 *******************************************************************************
 */


 /**
  * Asynchronously returns a greeting for a specified name.
  * @param name The name of the person to greet.
  */
 function greet(name) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (typeof name === 'string') { 
          resolve('Hello there, ' + name);
        } else {
          reject('Name must be a string!');
        }
      }, 500);
    });
}

/**
 * Returns the uppercased version of a string.
 * @param {*} str The string to uppercase.
 */
function uppercaser(str) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        if (typeof str === 'string') {
            resolve(str.toUpperCase());
        } else {
            reject('Argument to uppercaser must be string');
        }
        }, 500);
    });
}

async function spacer(str) {
  return new Promise(function(resolve, reject) {
      setTimeout(function() {
          if (typeof str === 'string') {
              resolve(str.split('').join(' '));
          } else {
              reject('Argument to spacer must be string');
          }
      }, 2000);
  });
}

async function greetAndUppercase(name) {
    greeting = await greet(name)
    uppercasedGreeting = await uppercaser(greeting)
    spacedGreeting = await spacer(uppercasedGreeting)
    return spacedGreeting
}

/* Uncomment me! #1 */
// result = greetAndUppercase('Ducky')
// console.log(result)

/* Uncomment me! #2 */
greetAndUppercase('Ducky')
    .then(function(result) {
        console.log(result)
    })
    .catch(function(err) {
        console.log(err)
    })
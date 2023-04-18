/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. What will be printed to the console when
 *    it runs? Run the code using `node challenge2.js` and verify that your
 *    expectation was correct.
 *    
 *  Answer: The code should run greet() first using the name variable (Ducky) and 
 *    print "Hello there, Ducky". It should then run the uppercaser() using the given string 
 *    and print "MAKE SCHOOL IS AWESOME!!!"
 *    The prediction was correct.
 * 
 * 2. What happens if greet() fails? Make it fail by changing 'name' to a number
 *    instead of a string. What happens? Does uppercaser() still run?
 *  
 *  Answer: If the greet() function fails by changing the name parameter to a number 
 *    instead of a string, the promise returned by greet() will be rejected with the 
 *    error message "Name must be a string!". The uppercaser() function will not run 
 *    because it is dependent on the successful resolution of the greet() promise, 
 *    which will not occur in this case due to the rejection caused by passing a number 
 *    as the name parameter. 
 * 
 * 3. What happens if greet() succeeds and uppercaser() fails? Modify your code
 *    to achieve this result by changing the values of 'name' and 'my_str' and
 *    run the code again.
 *  
 *  Answer: The greet function will run without any problem and print 'Hello there, Ducky' 
 *    but when the uppercaser() fails, the catch() block will be triggered and print 'Received an error!' 
 *    and then print 'Argument to uppercaser must be a string'.
 * 
 * 4. Write a method that takes a string as input and returns the input string
 *    with a space added between each character. E.g. 'foo' -> 'f o o'
 * 
 *    Name this method spacer(str). It should run asynchronously, so use a 
 *    setTimeout() and return a Promise.
 * 
 *    Last, call spacer() after you call greeter() and uppercaser().
 * 
 *    Make sure you only have one catch() block. If you have more than one,
 *    refactor your code so that you only have one. 
 *     
 *    Answer: Y e l l o w
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
      }, 1000);
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
      }, 1500);
  });
}

/**
* Asynchronously adds spaces between each character in a string.
* @param str2 The string to add spaces to.
*/
function spacer(str2) {
  return new Promise(function(resolve, reject) {
      setTimeout(function() {
          if (typeof str2 === 'string') {
              resolve(str2.split('').join(' '));
          } else {
              reject('Argument to spacer must be string');
          }
      }, 2000);
  });
}

name = 'Ducky'
my_str = 'Make School is Awesome!!!'
str2 = 'Yellow'

greet(name)
  .then((greetResult) => {
      console.log(greetResult)
      return uppercaser(my_str);
  })
  .then((uppercaserResult) => {
      console.log(uppercaserResult)
      return spacer(str2);
  })
  .then((spacerResult) => {
      console.log(spacerResult);
  })
  .catch((err) => {
      console.log('Received an error!')
      console.log(err);
  });


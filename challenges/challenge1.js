/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 * 
 *  Answer: Since there is a 2 second delay in the call back funcions, 
 *    the two console logs outside the functions will execute first and then 
 *    the asynchronous functions prints will happen. The order of printing will be:
 *    "Step 1" -> "Step 3" -> "Step 2" -> "Async Action completed via callback" 
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 * 
 *  Answer: They were printed in the same order as predicted above:  
 *    Step 1, Step 3, Step 2, Async Action completed via callback
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 * 
 *  Answer: I'm predicting that with a delay of 0s, the order will be as written in the code:
 *    "Step 1" -> "Step 2" -> "Async Action completed via callback" -> "Step 3" 
 *    - AH, I was wrong! The order was the same as when there was a 2000ms delay. 
 *    This is because the delay specified in setTimeout is a minimum delay, 
 *    meaning that the callback function will be executed as soon as the 
 *    JavaScript event loop is free, even if the delay is set to 0. 
 *    In other words, the callback function will be pushed to the end of the 
 *    execution queue, allowing the rest of the code to execute first.
 * 
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');


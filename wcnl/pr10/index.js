// A simple function that takes two numbers and a callback to perform an operation
function performOperation(a, b, callback) {
    const result = a + b;
    callback(result);
  }
  
  // Callback function to log the result
  function logResult(result) {
    console.log(`The result is: ${result}`);
  }
  
  // Perform an operation and pass the callback function
  performOperation(5, 3, logResult);
  
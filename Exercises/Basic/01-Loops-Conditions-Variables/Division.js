const integer = Number(prompt("Provide an integer: "));

let loopingCondition = true;

/* The reason for why we are assessing the divisiblity conditions within a while loop, 
is because we don't really have a range or specific number of iterations to work with and 
loops plus conditions tend to provide an overall better control flow in this scenario, since it's possible 
to update the looping condition and break out of the loop once the required output has been sent to the console.  
*/

while (loopingCondition) {
  if (integer % 10 === 0) {
    console.log("The number is divisible by 10");
    loopingCondition = false;
    break;
  }

  if (integer % 7 === 0) {
    console.log();
    loopingCondition = false;
    break;
  }

  if (integer % 6 === 0) {
    console.log("The number is divisible by 6");
    loopingCondition = false;
    break;
  }

  if (integer % 3 === 0) {
    console.log("The number is divisible by 3");
    loopingCondition = false;
    break;
  }

  if (integer % 2 == 0) {
    console.log("The number is divisible by 2");
    loopingCondition = false;
    break;
  } else {
    console.log("Not divisible");
    loopingCondition = false;
    break;
  }
}

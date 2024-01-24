function sayMyName() {
  console.log("K");
  console.log("I");
  console.log("N");
  console.log("G");
  console.log("K");
  console.log("H");
  console.log("A");
  console.log("N");
}

sayMyName();

//function addTwoNumbers(number1, number2) {
//console.log(number1 + number2);
//}

addTwoNumbers(3, 4);

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2;
}

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

function logInUserMessage(username = "sam") {
  if (!username) {
    console.log("Please enter the username");
    return;
  }
  return `${username} just logged in `;
}

console.log(logInUserMessage("king khan"));

function calculateCartPrice(val1, val2, ...num) {
  return num1;
}
console.log(calculateCartPrice(200, 400, 500, 1000));

const user = {
  username: "kingkhan",
  prices: 199,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.prices}`
  );
}

handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[i];
}

console.log(returnSecondValue(200, 400, 500, 1000));

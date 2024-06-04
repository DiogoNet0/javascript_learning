// Variables

/*
let user = 'John'
  , age = 25
  , message = 'Hello';

alert(message); // shows the variable content
alert(age);
alert(user);

message = 'World';

alert(message);

message = user; // copies user string

alert(message);
 */

// exercise 1

/* let admin;
let name = 'John';

admin = name;

alert(admin); */

// exercise 2

/* const ourPlanetName = 'Earth';

let currentUserName; */

// Arithmetic

/* // basic math
let x = 5;
let y = 2;
let z = x + y;

console.log(z); */

// incrementing / decrementing
/*
let x = 5;
x++;
let z = x;

console.log(z);
 */

/*
// assignment foundations
console.log((4 + 6 + 9) / 77)

let a = 10;
console.log(a);

console.log(9 * a);

let b = 7 * a;
console.log(b);

const MAX = 57;
let actual = MAX - 13;
let percentage = actual/MAX;
 */

/*
let name = 'John';
let x = 10;
let y = 20;

alert(`Hello, ${name}`); //Hello, John
alert(`The result is ${x + y}`); */

/*
// exercise logical operators

let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

    let pass = prompt('Password?', '');

    if (pass === 'TheMaster') {
        alert( 'Welcome!' );
    } else if (pass === '' || pass === null) {
        alert( 'Canceled' );
    } else {
        alert( 'Wrong password' );
    }

} else if (userName === '' || userName === null) {
    alert( 'Canceled' );
} else {
    alert( "I don't know you" );
} */

/*
let name = prompt('Whats the official name of Javascript?', '');

if (name === 'ECMAScript') {
    alert('Right!');
} else {
    alert( 'You dont know? ECMAScript');
}
 */

/*
let value = prompt('Please type a number:', '');

if (value >= 1) {
    alert('1');
} else if (value < 0) {
    alert('-1');
} else {
    alert('0');
}
 */
/*
// ternary

let age = prompt("What's your age?");
let message = age >= 18 ? "You are an adult!" : "You are a minor!";

alert(message);
 */

/*
const temp = prompt("What's the temperature?");

if (temp > 0 && temp <= 30) {
    alert("The weather is GOOD")
}
else {
    alert("The weather is BAD")
}
 */

/*
let a = prompt('whats a?');
let b = prompt('whats b?');
let result = (a + b < 4) ? 'Below' : 'Over';

alert(result);
 */

/*
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
 */

/*
let login = prompt('Name:');

let message = (login === 'Employee') ? 'Hello!' :
    (login === 'Director') ? 'Greetings' :
        (login === '') ? 'No Login' :
            '';

alert(message);
 */

/* switch (browser) {
  case "Edge":
    alert("You've got the Edge!");
    break;

  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    alert("Okay we support these browsers too");
    break;

  default:
    alert("We hope that this page looks ok!");
} */

/* let browser = prompt("What's your web browser?");

if (browser === "Edge") {
  alert("You've got the Edge!");
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}
 */

/* let a = +prompt("a?", "");

switch (a) {
  case 0:
    alert(0);
    break;

  case 1:
    alert(1);
    break;

  case 2:
  case 3:
    alert("2,3");
    break;
}
 */

/* function showMessage() {
  let message = "hello world";

  alert(message);
}

showMessage();
 */

/* function checkAge(age) {
  return age > 18 ? true : confirm("Did your parents allow you?");
}

function checkAge(age) {
  return age > 18 || confirm("Did your parents allow you?");
}
 */

/* function min(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}

alert(min(6, 2)); */

/* function min(a, b) {
  return a < b ? a : b;
}
alert(min(6, 7));
 */

//arrow functions

/* function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
 */

/* Exercises TheOdinProject

let add7 = (number) => number + 7;
alert(add7(7));

let multiply = (a, b) => a * b;
alert(multiply(2, 2));

let capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
alert(capitalize("i love you!"));

let lastLetter = (string) => string.slice(-1);
alert(lastLetter("i love you!"));
 */

/* 
FuzzBuzz game

let answer = parseInt(
  prompt("Please enter the number you would like to FizzBuzz up to: ")
);

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
} */

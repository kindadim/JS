/* miscInfo
comments are made using // for single line and /* for multi-line
  should be used to explain the functionality of a block of code

descriptive variable and function names help make your code more readable
  function1 is a bad example
  incrementationFunction is a good example

camelCase is used for variable and function naming

console.log() is used to output data to the console
  console.log('Hello World!'); Hello World!

typeof is used to check the data type of a variable
  typeof 5; number
  typeof 'Hello World!'; string
  typeof true; boolean

values are counted starting at 0, not 1
*/

/* variables
variables are containers for storing data values
  values can be strings, numbers, or booleans
  = 'Hello World!'
  = 5
  = true

const is used for values that will not be reassigned
  const constantVariable = 5;

let is used for values that will be reassigned
  let fluidVariable;

var is used for legacy support and generally isn't used

multiple variables can be declared in a single line
  const variable1 = 1, variable2 = 2, variable3 = 3;
  let variable1, variable2, variable3;
  const variable1 = 1; let  variable2;

Number() is used to convert a value to a number
  Number('5'); 5
  Number(true); 1
  Number(false); 0

String() is used to convert a value to a string
  String(5); '5'
  String(true); 'true'
  String(false); 'false'

Boolean() is used to convert a value to a boolean
  Boolean(5); true
  Boolean(0); false
  Boolean('Hello World!'); true
*/

/* functions
functions are blocks of code that can be called to perform a task
  a function can take parameters and return a value
    function functionName(parameter1, parameter2) {
      return parameter1 + parameter2;
    }

to call a function, use functionName(argument1, argument2);
  functions can also be called within other functions or variables
    let variableName = functionName(argument1, argument2);
*/

/* operators
arithmaticOperators
  arithmetic operators are used to perform arithmetic on numbers

  + for addition and concatenation
    let x = 5;
    x = x + 5; // x is now 10
  - for subtraction
    let x = 10;
    x = x - 5; // x is now 5
  * for multiplication
    let x = 5;
    x = x * 5; // x is now 25
  / for division
    let x = 25;
    x = x / 5; // x is now 5
  % for modulo - gives the remainder of a division
    let x = 5;
    x = x % 2; // x is now 1
  ** for exponentiation
    let x = 5;
    x = x ** 2; // x is now 25
  ++ for incrementing by 1 - +1 to a variable each time it is called
  -- for decrementing by 1 - -1 to a variable each time it is called

comparisonOperators
  comparison operators are used to compare two values

  == equal to
    5 == 5; true
  === equal value and equal type
    5 === '5'; false
  != not equal
    5 != 5; false
  !== not equal value or not equal type
    5 !== '5'; true
  > greater than
    5 > 5; false
  < less than
    5 < 5; false
  >= greater than or equal to
    5 >= 5; true
  <= less than or equal to
    5 <= 5; true
*/

/* arrays
arrays are placed within [brackets]

arrays are used to store multiple values in a single variable
  let arrayName = [value1, value2, value3];

arrayName.push(value4); appends a value to the end of the target array
  arrayName = [value1, value2, value3, value4]

arrayName.reverse(); reverses the order of the array
  arrayName = [value4, value3, value2, value1]

nested arrays are arrays within arrays
  arrayName = [[value1, value2], [value3, value4]];

values in arrays are counted from 0 and can be called while nested
  console.log(arrayName[1]); // Array [value3, value4]
  console.log(arrayName[1][0], ' ', arrayName[1][1]); // value3 value4
    // string with space added for legibility
*/

/* objects
objects are placed within {curly brackets}

objects are used to store multiple values in a single variable
  let objectName = {key1: value1, key2: value2, key3: value3};

values in objects are called by their key with dot notation
  console.log(objectName.key1); // value1

objects can be nested within objects
  objectName = {key1: {key2: value2, key3: value3}};
  console.log(objectName.key1.key2); // value2
*/

/* conditionals
if statements are used to perform different actions based on different conditions
  if (condition1) {
    outputTrue
  }

? is used to whittle down the length of a simple if statement
  const (condition1) ? outputTrue : outputFalse;

else if statements are used to specify a new condition if the first condition is false
  else if (condition2) {
    outputTrue
  }
else statements are used to perform a different action if no previous conditions are true
  else {
    outputFalse
  }
*/













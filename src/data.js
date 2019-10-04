const prototypeData = [{
  "id": 1,
  "question": "What allows you to define a set of related information using key-value pairs?",
  "answers": ["object", "array", "function"],
  "correctAnswer": "object"
}, {
  "id": 2,
  "question": "What is a comma-separated list of related values?",
  "answers": ["array", "object", "function"],
  "correctAnswer": "array"
}, {
  "id": 3,
  "question": "What type of prototype method directly modifies the existing array?",
  "answers": ["mutator method", "accessor method", "iteration method"],
  "correctAnswer": "mutator method"
}, {
  "id": 4,
  "question": "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
  "answers": ["mutator method", "accessor method", "iteration method"],
  "correctAnswer": "accessor method"
}, {
  "id": 5,
  "question": "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
  "answers": ["mutator method", "accessor method", "iteration method"],
  "correctAnswer": "iteration method"
}, {
  "id": 6,
  "question": "What is an example of a mutator method?",
  "answers": ["sort()", "map()", "join()"],
  "correctAnswer": "sort()"
}, {
  "id": 7,
  "question": "Which array prototype is not an accessor method?",
  "answers": ["join()", "slice()", "splice()"],
  "correctAnswer": "splice()"
}, {
  "id": 8,
  "question": "What do iterator methods take in as their first argument?",
  "answers": ["callback function", "current element", "an array"],
  "correctAnswer": "callback function"
}, {
  "id": 9,
  "question": "What does the callback function for find() return?",
  "answers": ["boolean", "array", "object"],
  "correctAnswer": "boolean"
}, {
  "id": 10,
  "question": "Which iteration method returns the first array element where the callback function returns true",
  "answers": ["find()", "filter()", "forEach()"],
  "correctAnswer": "find()"
}, {
  "id": 11,
  "question": "Which iteration method returns a new array with all elements that match a given condition?",
  "answers": ["filter()", "find()", "map()"],
  "correctAnswer": "filter()"
}, {
  "id": 12,
  "question": "Which iteration method returns an array of the same length as the original array?",
  "answers": ["map()", "forEach()", "reduce()"],
  "correctAnswer": "map()"
}, {
  "id": 13,
  "question": "The callback function for map() returns a modified version of the current element.",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 14,
  "question": "Which iteration method can turn an array into a single value of any data type?",
  "answers": ["reduce()", "map()", "filter()"],
  "correctAnswer": "reduce()"
}, {
  "id": 15,
  "question": "The callback function for reduce() takes in an accumulator and a current element.",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 16,
  "question": "What does the callback function for reduce() return?",
  "answers": ["the accumulator", "the current element", "the initializer"],
  "correctAnswer": "the accumulator"
}, {
  "id": 17,
  "question": "What does the reduce() method take in?",
  "answers": ["callback function and initializer", "callback function and current element", "callback function and accumulator"],
  "correctAnswer": "callback function and initializer"
}, {
  "id": 18,
  "question": "What does the callback function for the map() method take in?",
  "answers": ["current element", "initializer", "boolean"],
  "correctAnswer": "current element"
}, {
  "id": 19,
  "question": "What does the callback function for filter() return?",
  "answers": ["boolean", "an array of the same length", "a single value of any data type"],
  "correctAnswer": "boolean"
}, {
  "id": 20,
  "question": "forEach() returns an array",
  "answers": ["true", "false"],
  "correctAnswer": "false"
}, {
  "id": 21,
  "question": "Which iteration method is best for DOM manipulation?",
  "answers": ["forEach()", "map()", "reduce()"],
  "correctAnswer": "forEach()"
}, {
  "id": 22,
  "question": "Which prototype method is used to iterate over each property of an object?",
  "answers": ["Object.keys()", "Object.values()", "reduce()"],
  "correctAnswer": "Object.keys()"
}, {
  "id": 23,
  "question": "Which prototype method can make a copy of a pre-existing object or merge two or more objects together?",
  "answers": ["Object.assign()", "Object.keys()", "filter()"],
  "correctAnswer": "Object.assign()"
}, {
  "id": 24,
  "question": "Object.assign() can take in an indefinite amount of arguments",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 25,
  "question": "Arrays are specialized objects where the keys are ordered numbers.",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 26,
  "question": "shift(), unshift(), pop(), and push() are examples of what type of array property method?",
  "answers": ["mutator method", "accessor method", "iteration method"],
  "correctAnswer": "mutator method"
}, {
  "id": 27,
  "question": "Accessor methods permanently modify the original array, mutator methods do not.",
  "answers": ["true", "false"],
  "correctAnswer": "false"
}, {
  "id": 28,
  "question": "Which prototype method returns an array of an object's property values?",
  "answers": ["Object.keys()", "Object.values()", "Object.assign()"],
  "correctAnswer": "Object.keys()"
}, {
  "id": 29,
  "question": "map() takes in two optional arguments: the index of the current element, and the array that map was called upon",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 30,
  "question": "What type of methods are functions that allow you to manipulate the value of a particular data type or class?",
  "answers": ["prototype method", "object", "callback function"],
  "correctAnswer": "prototype method"
}]

const secondDataset = [{
  "id": 1,
  "question": "What is the HTML tag under which one can write the JavaScript code?",
  "answers": ["<javascript>", "<script>", "<js>"],
  "correctAnswer": "<script>"
}, {
  "id": 2,
  "question": "Which of the following is not a reserved word in JavaScript?",
  "answers": ["program", "interface", "short"],
  "correctAnswer": "program"
}, {
  "id": 3,
  "question": "In JavaScript, we do not have datatypes like integer and float. What is the function that can be used to check if the number is an integer or not?",
  "answers": ["isInteger(value)", "Integer(value)", "ifinteger(value)"],
  "correctAnswer": "isInteger(value)"
}, {
  "id": 4,
  "question": "Which function of an Array object calls a function for each element in the array?",
  "answers": ["forEach()", "forEvery()", "each()"],
  "correctAnswer": "forEach()"
}, {
  "id": 5,
  "question": "What is the syntax for creating a function in JavaScript named as addName?",
  "answers": ["function = addName()", "function = addName()", "function : addName()"],
  "correctAnswer": "function = addName()"
}, {
  "id": 6,
  "question": "How is the function called in JavaScript?",
  "answers": ["addName()", "function addName()", "call addName()"],
  "correctAnswer": "addName()"
}, {
  "id": 7,
  "question": "What is the JavaScript syntax for printing values in Console?",
  "answers": ["console.log(5)", "print.console(5);", "print(5)"],
  "correctAnswer": "console.log(5)"
}, {
  "id": 8,
  "question": "What is the method in JavaScript used to remove the whitespace at the beginning and end of any string ?",
  "answers": ["trim()", "strip()", "each()"],
  "correctAnswer": "trim()"
}, {
  "id": 9,
  "question": "Which of the following type of variable is visible only within a function where it is defined?",
  "answers": ["local variable", "global variable", "no one"],
  "correctAnswer": "local variable"
}, {
  "id": 10,
  "question": "What is the method in JavaScript used to remove the whitespace at the beginning and end of any string ?",
  "answers": ["reverse()", "push()", "reduce()"],
  "correctAnswer": "reverse()"
}, {
  "id": 11,
  "question": "Which of the following function of String object returns the characters in a string beginning at the specified location through the specified number of characters?",
  "answers": ["substr()", "slice()", "split()"],
  "correctAnswer": "substr()"
}, {
  "id": 12,
  "question": "Which of the following can't be done with client-side JavaScript?",
  "answers": ["Storing the form's contents to a database file on the server", "Sending a form's contents by email", "Validating a form"],
  "correctAnswer": "Storing the form's contents to a database file on the server"
}, {
  "id": 13,
  "question": "Which of the following is not a valid JavaScript variable name?",
  "answers": ["2names", "FirstAndLast", "SREW"],
  "correctAnswer": "2names"
}, {
  "id": 14,
  "question": "Which is the correct way to write a JavaScript array?",
  "answers": ["var txt = ['tim','kim','jim']", "var txt = {'tim','kim','jim'}", "var txt = [1:'tim',2:'kim',3:'jim']"],
  "correctAnswer": "var txt = ['tim','kim','jim']"
}, {
  "id": 15,
  "question": "What is mean by 'this' keyword in javascript?",
  "answers": ["It refers current object", "It referes previous object", "It is variable which contains value"],
  "correctAnswer": "It refers current object"
}, {
  "id": 16,
  "question": "In JavaScript, Window.prompt() method return true or false value ?",
  "answers": ["true", "false"],
  "correctAnswer": "false"
}, {
  "id": 17,
  "question": "What is the element used – and hidden – in code that explains things and makes the content more readable?",
  "answers": ["Comments", "Quotations", "Notes"],
  "correctAnswer": "Comments"
}, {
  "id": 18,
  "question": "What is the name of the object that allows you to perform mathematical tasks with the interpreter?",
  "answers": ["Math", "Number", "Solve"],
  "correctAnswer": "Math"
}, {
  "id": 19,
  "question": "What is the format called that is used for storing and transporting data?",
  "answers": ["JSON", "HTML", "Syntax"],
  "correctAnswer": "JSON"
}, {
  "id": 20,
  "question": "In JavaScript, what element is used to store and manipulate text usually in multiples?",
  "answers": ["Strings", "Arrays", "Number"],
  "correctAnswer": "Strings"
}, {
  "id": 21,
  "question": "To find highest number in an array, method to be used is",
  "answers": ["Math.highest", "Math.cal(high)", "Math.max()"],
  "correctAnswer": "Math.max()"
}, {
  "id": 22,
  "question": "Method used to sort an array alphabetically is known to be",
  "answers": ["sort()", "compare()", "increase()"],
  "correctAnswer": "sort()"
}, {
  "id": 23,
  "question": "What symbol is used to negate a boolean in JavaScript?",
  "answers": ["!", "NOT", "%"],
  "correctAnswer": "!"
}, {
  "id": 24,
  "question": "Which statement allows us to return values from functions?",
  "answers": ["return", "console", "print"],
  "correctAnswer": "return"
}, {
  "id": 25,
  "question": "A store has 20 apples in inventory.How can you store this information in a JavaScript variable?",
  "answers": ["var numApples = 20", "var numApples == 20", "var num apples = 20"],
  "correctAnswer": "var numApples = 20"
}, {
  "id": 26,
  "question": "Is it possible to have an array with 0 items.",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 27,
  "question": "Which of the below is used in Javascript to insert special characters?",
  "answers": ["\\", "&", "+"],
  "correctAnswer": "\\"
}, {
  "id": 28,
  "question": "JavaScript ignores extra spaces",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 29,
  "question": "How does JavaScript store dates in objects of Date type?",
  "answers": ["The number of milliseconds since January 1st, 1970", "The number of days since January 1st, 1900", "The number of seconds since January 1st, 1970"],
  "correctAnswer": "The number of milliseconds since January 1st, 1970"
}, {
  "id": 30,
  "question": "How to append a value to an array in JavaScript?",
  "answers": ["arr[arr.length] = value", "arr[arr.length-1] = value", "arr[arr.length+1] = value"],
  "correctAnswer": "arr[arr.length] = value"
}]

module.exports = {
  prototypeData,
  secondDataset
}

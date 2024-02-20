let num1 = 10;
let num2 = 5;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

let age = 20;
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

const name = "jeff";
let myAge = 30;
const colors = ["red", "green", "blue"];
console.log("Name is", name, "my age is", myAge, "my top 3 colors are", colors);

const currentDate = new Date();
console.log("Current Date and Time:", currentDate.toLocaleString());
const number = 36;
const squareRoot = Math.sqrt(number);
console.log("Square Root of", number + ":", squareRoot);

const book = {
    title: "JavaScript Basics",
    published: 2022,
    keywords: ["JavaScript", "Programming", "Basics"],
    getTitleAndPublished() {
        return "Title: " + this.title + ", Published Year: " + this.published;
    }
};

console.log(book.getTitleAndPublished());

book.keywords.push("Web Development");
console.log("Updated Keywords:", book.keywords);

function sumOfNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

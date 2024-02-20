var num1 = 10;
var num2 = 5;


var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;


console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);




 var age = 20;
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}



var Name = "jeff";
var age = 30;
var colors = ["red", "green", "blue"];
console.log ("Name is",Name,"my age is",age,"my top 3 colors are", colors );



var currentDate = new Date();
console.log("Current Date and Time:", currentDate.toLocaleString());
var number = 36;
var squareRoot = Math.sqrt(number);
console.log("Square Root of", number + ":", squareRoot);


var book = {
    title: "JavaScript Basics",
    published: 2022,
    keywords: ["JavaScript", "Programming", "Basics"],
    getTitleAndPublished: function() {
        return "Title: " + this.title + ", Published Year: " + this.published;
    }
};


console.log(book.getTitleAndPublished());

book.keywords.push("Web Development");
console.log("Updated Keywords:", book.keywords);


function sumOfNumbers(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}


function isPalindrome(str) {
    var reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}



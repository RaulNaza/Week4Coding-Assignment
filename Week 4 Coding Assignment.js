console.log("Question 1:")

var ages = [3,9,23,64,2,8,28,93]; //Declaring variables
var subtractFirstLastElement = (arr) => arr[arr.length - 1] - arr[0]; //This function subtracts the first element from the last for the array being passed through
ages.push(50); //Uses the push method to add the number '50' to the end of the array 'ages'

console.log(subtractFirstLastElement(ages));

//function averageAge will take in an array as an argument passed throguh the arr parameter. The loop withing the function iterates through the array and adds the length of each element to the sum variable.
//Once we have a total sum of the element lenghts we divide by the number of elements. To find the number of element you can use the array lengt method.
function averageAge(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum/(arr.length);
}
console.log(averageAge(ages));

console.log("-------------------------------------------------------------");
console.log('Question 2:');

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//The averageLetter function will iterate through an array and add each elements lenght to the sumLength variable. The sum will be divided by the arrays length to return the average.
function averageLetter (arr) {
    let sumLength = 0; 
    for (let i = 0; i < arr.length; i++){
        sumLength += arr[i].length;
    }
    return sumLength/(arr.length);
}

console.log(averageLetter(names));


// The namesConcat function will iterate through an array, in this case te names  array, and concatinate while including a space between each element
let namesConcat = (list) => {
    let newNames = ``;
    for (let i = 0; i < list.length; i++){
        newNames += ` ` + list[i];
    }
    return newNames;
}

console.log(namesConcat(names));

console.log("-------------------------------------------------------------");
console.log("Question 3:");

//Response on how I would get the last element
console.log(`To access the last element you would use 'arrName.length - 1'.`);

console.log("-------------------------------------------------------------");
console.log("Question 4:");

//Response on how I would get the first element
console.log(`To access the first element you would use 'arrName[0]'. This uses the brackets syntax on index 0 of an array.`);

console.log("-------------------------------------------------------------");
console.log("Question 5:");

//Created an empty array to house the length of each element in the names array
var nameLengths = [];

//The lengthOfName function will iterate through an array and push the length of each element to the nameLengths empty array- previously declared.
var lengthOfNames = (arr) => {
    for (let i = 0; i < arr.length; i++){
        nameLengths.push(arr[i].length);
    }
    return nameLengths;
}

lengthOfNames(names);//This line envokes the function to assign values to the nameLengths array.

console.log(nameLengths);

console.log("-------------------------------------------------------------");
console.log("Question 6:");

//Declared an empty variable to count the lengths of each element in the nameLengths array.
var sumLength = 0;

//This is a for loop which iterates through the nameLengths array and adds each element to the sumLength variable resulting in the total sum.
for (let i = 0; i < nameLengths.length; i++){
    sumLength += nameLengths[i];
}

console.log(sumLength);

console.log("-------------------------------------------------------------");
console.log("Question 7:");

//function concatWord takes in 2 parameters, word and n, which will take a variable passed through word and add it 'n' timesto the count variable. This will return string of the word repeater 'n' times.
var concatWord = (word,n) => {
    let count = '';
    while (n > 0){
        count += word;
        n--;
    }
    return count;
}

console.log(concatWord('Hello', 5));

console.log("-------------------------------------------------------------");
console.log("Question 8:");

//The fullName function concatenates the two parametes wit a space in between.
var fullName = (first,last) => first + " " + last;

console.log(fullName('Raul',"Nazario Gonzales"));


console.log("-------------------------------------------------------------");
console.log("Question 9:");

//The greaterThanOneHundred function iterates through an array and adds each element to the count variable. Once the loop ends, the conditional statement determines if the sum is greater than 100.
var greaterThanOneHundred = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        count += arr[i];
    }
    if (count > 100){
        return true;
    }else {
        return false;
    }
}


console.log(greaterThanOneHundred([20,15,30,85,51]));
console.log(greaterThanOneHundred([1,5,50,10,6]));


console.log("-------------------------------------------------------------");
console.log("Question 10:");

//The aveOfArr function will loop throguh the array and sum up it's elements. The function will return the sum divided by the array length to result in the average.
var aveOfArr = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}

console.log(aveOfArr([10,20,30,40,50]));

console.log("-------------------------------------------------------------");
console.log("Question 11:");

//The greaterThan function will take in two parameters and assess if the first array is greater than the second array through the conditional statement. Using the existing avgOfArr I passed the function as an argument.
var greaterThan = (avg1,avg2) =>{
    if (avg1 > avg2){
        return true;
    } else{
        return false;
    }
}

console.log(greaterThan(aveOfArr([10,20,45,60,12]),aveOfArr([60,10,5,3,5])));


console.log("-------------------------------------------------------------");
console.log("Question 12:");

var isHotOutside = true;
var moneyInPocket = 12.00;


//Functon willBuyDrink takes in two parameters and through the conditional statement assess if bothg the temp and money parameters meed the condition.
var willBuyDrink = (temp,money) => {
    if (temp == true && money >= 10.50){
        return true;
    }else{
        return false;
    }
}

console.log(willBuyDrink(isHotOutside,moneyInPocket));


console.log("-------------------------------------------------------------");
console.log("Question 13:");

//This function tests for the boolean values that will be passed through to the temp and available parameters.
// Within the function goingToBeach I created some conditional statements to test for each variables values.
// Depending on the value for each argument being passed through you will get a different response.

var goingToBeach = (temp,available) => {
    if (temp == true && available == true){
        return `Lets go to the beach!`;
    } else if (temp == false){
        return `It's too cold for the beach :(`;
    } else if (available == false){
        return `Sorry but I am not available to go`
    }
}

var timeOff = true;

console.log(goingToBeach(isHotOutside,timeOff));

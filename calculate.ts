import { Sum } from "./add.js";
import { sub } from "./sub.js";
import { multiply } from "./multiply.js";
import { div } from "./div.js";
import inquirer from "inquirer";
import chalk from "chalk";

let {num1, num2, operation} = await inquirer.prompt([
    {
        name:"num1",
        type:"number",
        message:"Enter first number: "
    },
    {
        name:"num2",
        type:"number",
        message:"Enter second number: "
    },
    {
        name:"operation",
        type:"list",
        message:"Select operation: ",
        choices:["Addition", "Subtraction", "Multiplication", "Division"]
    }

]);
if (num1 && num2 && operation){
if(operation === "Addition"){
    console.log(chalk.greenBright(`Sum of ${num1} and ${num2} is ${Sum(num1,num2)}`))};
 if (operation === "Subtraction"){
     console.log(chalk.greenBright(`Subtraction of ${num1} and ${num2} is ${sub(num1,num2)}`))};
     if (operation === "Multiplication"){
         console.log(chalk.greenBright(`Multiplication of ${num1} and ${num2} is ${multiply(num1,num2)}`))};
         if (operation === "Division"){
             console.log(chalk.greenBright(`Division of ${num1} and ${num2} is ${div(num1,num2)}`))};}
             else {
                console.log(chalk.redBright("You have entered invalid input"));
             }
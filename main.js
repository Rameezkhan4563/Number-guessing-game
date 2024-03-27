#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([{
        message: "Please guess a number between 1 to 6",
        type: "number",
        name: "YourGuessedNumber"
    }]);
if (answer.YourGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed right number");
}
else {
    console.log("You guessed wrong number");
}

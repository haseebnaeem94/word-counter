#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter sentence to count words :",
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(`The sentence you have entered have following words length: ${words.length}`);
console.log(words);

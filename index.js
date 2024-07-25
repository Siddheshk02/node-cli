#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import inquirer from "inquirer";
import figlet from "figlet";

console.log(
  chalk.yellow(figlet.textSync("My Node CLI", { horizontalLayout: "full" }))
);

program.version("1.0.0").description("My Node CLI");

program.action(() => {
    inquirer
     .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
        },
     ])
     .then((answers) => {
        console.log(chalk.green(`Hey there, ${answers.name}!`));
    })
})

program.parse(process.argv);
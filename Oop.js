#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log(chalk.yellowBright.bold.italic.underline("\t\t WELCOME TO WARDAH SHAH OBJECT ORIENTED PROGRAMME"));
        const ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: chalk.redBright.bold("To Whom You Want To Talk...?"),
            choices: ["Wardah Shah", "Student"]
        });
        if (ans.select == "Wardah Shah") {
            console.log(chalk.blueBright.bold(`\t\tYou're talking to ${chalk.bold.yellowBright("Wardah Shah")}`));
            console.log(chalk.cyanBright.bold("\t\tHope You're Doing Good!!"));
        }
        if (ans.select == "Student") {
            const answer = await inquirer.prompt({
                type: "input",
                name: "student",
                message: chalk.magentaBright.bold("Which student do you want to talk? ")
            });
            const student = persons.students.find((val) => val.name == answer.student);
            if (!student) {
                const name = new Student(answer.student);
                persons.addStudent(name);
                console.log(chalk.yellowBright.bold(`\t\tI am ${name.name}, and I am Fine!! `));
                console.log(persons.students);
            }
            if (student) {
                console.log(chalk.yellowBright.bold(`Hello i am ${student.name} and iam Fine!!....`));
                console.log(persons.students);
            }
        }
    } while (true);
};
programStart(persons);

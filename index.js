#!/usr/bin/env node
import inquirer from "inquirer";
console.log("...................................QUIZ GAME.............................");
console.log('                                                                             ');
let introduction = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    }
]);
console.log("hello " + introduction.name);
let select = await inquirer.prompt([
    {
        type: "list",
        name: "question1",
        message: "Select QUIZ GAME ",
        choices: ["C++ QUIZ", "Javascript QUIZ", "SQL QUIZ", "TypeScript QUIZ", "Exit"]
    }
]);
if (select.question1 === "C++ QUIZ") {
    console.log("**************************C++ QUIZ started****************************");
    let C_quiz1_1 = await inquirer.prompt([
        {
            type: "list",
            name: "q1",
            message: "When was C++ developed?",
            choices: ["1972", "1979", "1985", "1998"]
        }
    ]);
    //check answer
    if (C_quiz1_1.q1 === "1985") {
        console.log("Correct option selected");
    }
    else {
        console.log("Wrong answer");
    }
    //question2        
    let C_quiz1_2 = await inquirer.prompt([
        {
            type: "list",
            name: "q2",
            message: "Which of the following is not a data type in C++?",
            choices: ["int", "char", "float", "var"]
        }
    ]);
    //check answer
    if (C_quiz1_2.q2 === "var") {
        console.log("Correct option selected");
    }
    else {
        console.log("Wrong answer");
    }
    //Question3----------------------------
    let C_quiz1_3 = await inquirer.prompt([
        {
            type: "list",
            name: "q3",
            message: "Which of the following is used for line spacing in C++?",
            choices: ["none of the above", "/x", "/z", "/n"]
        }
    ]);
    //check answer  
    if (C_quiz1_3.q3 === "/n") {
        console.log("Correct option selected");
    }
    else {
        console.log("Wrong answer");
    }
    //Question4----------------------------
    let C_quiz1_4 = await inquirer.prompt([
        {
            type: "list",
            name: "q4",
            message: "Which of the following is used to assign value initially in Classes ?",
            choices: ["constructor", "destructor", "loop", "parameter"]
        }
    ]);
    //check answer
    if (C_quiz1_4.q4 === "constructor") {
        console.log("Correct option selected");
    }
    else {
        console.log("Wrong answer");
    }
    //Question5----------------------------
    let C_quiz1_5 = await inquirer.prompt([
        {
            type: "list",
            name: "q5",
            message: "Which of the following is the correct way to declare a pointer in c++?",
            choices: ["int ptr", "int*ptr", "pointer*ptr", "pointer int ptr"]
        }
    ]);
    //check answer
    if (C_quiz1_5.q5 === "int*ptr") {
        console.log("Correct option selected");
    }
    else {
        console.log("Wrong answer");
    }
}
//javascript quiz
else if (select.question1 === "Javascript QUIZ") {
    console.log("''''''''''''''''''''''''''''''''''Javascript QUIZ started''''''''''''''''''''''''''''''''");
    //question--------------------
    let js_quiz1_1 = await inquirer.prompt([
        {
            type: "list",
            name: "q1",
            message: "how do you declare a variable in Javascript?",
            choices: ["var myvar", "v myvar", "variable myvar", "let myvar"]
        }
    ]);
    // checkanswer------------------------------ 
    if (js_quiz1_1.q1 === "var myvar") {
        console.log("Correct option selected");
    }
    else {
        console.log("Wrong answer");
    }
    //question2---------------------------------
    let js_quiz2 = await inquirer.prompt([
        {
            type: "list",
            name: "q2",
            message: "Which keyword is used to declare a function in Javascript?",
            choices: ["fn", "def", "func", "function"]
        }
    ]);
    //check answer----------------------------
    if (js_quiz2.q2 === "function") {
        console.log("Correct option selected");
    }
    else {
        console.log("Wrong answer");
    }
    //question ----------------
    let js_quiz3 = await inquirer.prompt([
        {
            type: "list",
            name: "q3",
            message: "Which function is used to print content to the console in Javascript?",
            choices: ["print[]", "log()", "console.log()", "write()"]
        }
    ]);
    //check answer----------------------------
    if (js_quiz3 === "console.log()") {
        console.log("Correct option selected");
    }
    else {
        console.log("Wrong answer");
    }
    //question ----------------
    let js_quiz4 = await inquirer.prompt([
        {
            type: "list",
            name: "q4",
            message: "Which loop is used for iterating over the properties of an object in Javascript?",
            choices: ["for loop", "while loop", "do...while loop", "for...inloop"]
        }
    ]);
    //check answer----------------------------
    if (js_quiz4.q4 === "for...inloop") {
        console.log("Correct option selected");
    }
    else {
        console.log("Wrong answer");
    }
    //questions----------------------------
    let js_quiz5 = await inquirer.prompt([
        {
            type: "list",
            name: "q5",
            message: "Which symbol is used for equality comparison in Javascript?",
            choices: ["==", "=", "===", "!="]
        }
    ]);
    //check answer----------------------------
    if (js_quiz5.q5 === "===") {
        console.log("Correct option selected");
    }
    else {
        console.log("Wrong answer");
    }
}
//sql quiz
else if (select.question1 === ("SQL QUIZ")) {
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^SQL QUIZ started^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    //question-------------------
    let sql_quiz1 = await inquirer.prompt([
        {
            type: "list",
            name: "q1",
            message: "What does SQL stand for?",
            choices: ["structured Query Language", "Sequential Query Language", "Structured Question Language", "None of the above"]
        }
    ]);
    //checkanswer--------------
    if (sql_quiz1.q1.includes === ("structured Query Language")) {
        console.log("Correct option selected");
    }
    else {
        console.log("Wrong answer");
    }
    //question--------------------------------------------
    let sql_quiz2 = await inquirer.prompt([
        {
            type: "list",
            name: "q2",
            message: "Which keyword is used to retrieve data from a database in SQL?",
            choices: ["get", "retrive", "select", "fetch"]
        }
    ]);
    //checkanswer--------------
    if (sql_quiz2.q2.includes === ("select")) {
        console.log("Correct option selected");
    }
    else {
        console.log("Wrong answer");
    }
    //question-----------------------------
    let sql_quiz3 = await inquirer.prompt([
        {
            type: "list",
            name: "q3",
            message: "Which SQL statement is used to delete a table?",
            choices: ["drop", "delete", "remove", "erase"]
        }
    ]);
    //checkanswer--------------
    if (sql_quiz3.q3.includes === ("drop")) {
        console.log("Correct option selected");
    }
    else {
        console.log("Wrong answer");
    }
    //question-----------------------------
    let sql_quiz4 = await inquirer.prompt([
        {
            type: "list",
            name: "q4",
            message: "Which SQL statement is used to update data in a table?",
            choices: ["update", "set", "modify", "change"]
        }
    ]);
    //checkanswer--------------
    if (sql_quiz4.q4.includes === ("update")) {
        console.log("Correct option selected");
    }
    else {
        console.log("Wrong answer");
    }
    //question----------------------------------------------
    let sql_quiz5 = await inquirer.prompt([
        {
            type: "list",
            name: "q5",
            message: "What does the SQL WHERE clause do?",
            choices: ["Specifies a condition for filtering rows", "Specifies the columns to be retrieved", "Specifies the order of the result set", "none of the above"]
        }
    ]);
    //checkanswer--------------
    if (sql_quiz5.q5.includes === ("Specifies a condition for filtering rows")) {
        console.log("Correct option selected");
    }
    else {
        console.log("Wrong answer");
    }
}
//typescript quiz
else if (select.question1 === ("TypeScript QUIZ")) {
    console.log("TypeScript QUIZ started");
}
//exiting
else if (select.question1 === "Exit") {
    console.log("Exit");
}

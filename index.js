const Manager = require("./lib/Manager");
// import other classes (engineer etc)
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const regex = /^[a-zA-Z]+$/;

menu = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the manager's name",
      },

      {
        type: "input",
        name: "id",
        message: "What is the team manager's ID?",
      },

      {
        type: "input",
        name: "email",
        message: "What is the team manager's email?",
      },

      {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?",
      },
    ])
    .then(({ name, id, email, officeNumber }) => {
      const manager = new Manager(name, id, email, officeNumber);
      console.log(manager);
    });
};

internSelection = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the intern's name",
      },

      {
        type: "input",
        name: "school",
        message: "What school does the intern go to?",
      },

      {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
      },
    ])
    .then(({ name, school, email }) => {
      const intern = new Intern(name, school, email);
      console.log(intern);
    });
};

engineerSelection = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the engineer's name",
      },

      {
        type: "input",
        name: "school",
        message: "What school does the intern go to?",
      },

      {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
      },
    ])
    .then(({ name, school, email }) => {
      const intern = new Intern(name, school, email);
      console.log(intern);
    });
};


employeeQuestion = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "questionPrompt",
        message: "Which type of employee would you like to add next?",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members",
        ],
      },
    ])
    .then((answer) => {
      console.log(answer);
      if (answer.questionPrompt == "Intern") {
        internSelection();
      } else if (answer.questionPrompt == "Engineer") {
engineerSelection();
      }
    });
};

(async () => {
  await menu();
  await employeeQuestion();
})();

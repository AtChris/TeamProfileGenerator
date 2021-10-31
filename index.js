const Manager = require("./lib/Manager");
// import other classes (engineer etc)
const inquirer = require("inquirer");
const fs = require("fs");
const regex = /^[a-zA-Z]+$/;

menu = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the manager's name",
        },
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

menu();

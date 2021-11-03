const Manager = require("./lib/Manager");
// import other classes (engineer etc)
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const htmlgenerator = require("./htmlgenerator.js")
const inquirer = require("inquirer");
const fs = require("fs");
const returnedanswers = [];



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
      returnedanswers.push(manager);
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
        name: "id",
        message: "What is the intern's ID?",
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
    .then(({ name, id, school, email }) => {
      const intern = new Intern(name, id, school, email);
      console.log(intern);
      returnedanswers.push(intern);
      employeeQuestion();
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
        name: "id",
        message: "What is the engineer's ID?",
      },

      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
      },

      {
        type: "input",
        name: "github",
        message: "What is the engineer's Github username?",
      },

     
    ])
    .then(({ name, id, email, github }) => {
      const engineer = new Engineer(name, id, email, github);
      console.log(engineer);
      returnedanswers.push(intern);
      employeeQuestion();
    });
};
generatefile = (returnedanswers) => {
  const create = htmlgenerator(returnedanswers);
  fs.writeFile('index.html', create, err => {
    if(err) {
        throw err;
}

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
      else {
        generatefile(returnedanswers)
      }
    );
    }
};

(async () => {
  await menu();
  await employeeQuestion();
})();

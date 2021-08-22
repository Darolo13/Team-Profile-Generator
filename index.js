const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const DIST_DIR = path.resolve(__dirname, 'output');
const distPATH = path.join(DIST_DIR, 'genteam.html');

const src = require('./src/page-template');

const teamMemberArr = [];
const idArr = [];

function teamMenu() {

    function renderManager() {
        console.log(`
            =================
            Add team members!
            =================`
        );
        inquirer.prompt([
            {
                type: 'input',
                name: 'manName',
                message: "Name of the team manager. (Required)",
                validate: response => {
                    if (response !== '') {

                        return true;
                    }
                    return 'please enter a valid name!';
                }
            },
            {
                type: "input",
                name: "manId",
                message: "What is the id of the team manager?. (Required)",
                validate: response => {
                  if (response > 0) {
                    return true;
                  }
                  return "Please enter a number greater than zero.";
                }
              },
              {
                type: "input",
                name: "manEmail",
                message: "What is the email of the team manager?. (Required)",
                validate: response => {
                  if (response) {
                    return true;
                  }
                  return "Please enter a valid email address.";
                }
              },
              {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office number?. (Required)",
                validate: response => {
                  if (response > 0) {
                    return true;
                  }
                  return "Please enter a valid number (greater than zero).";
                }
              }
        ]).then(response => {
            const manager = new Manager(response.manName, response.manId, response.manEmail, response.officeNumber);
            teamMemberArr.push(manager);
            idArr.push(response.manId);
            renderTeam();
        });
    }

    function renderTeam() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'teamMember',
                message: 'Select the type of team member you would like to add',
                choices: [ 'Engineer', 'Intern', 'None']
            }
        ]).then(userResponse => {
            switch (userResponse.teamMember) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                default:
                    generateTeam();
            }
        });
    }

    function addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engName',
                message: 'What is the name of the engineer. (Required)',
                validate: response => {
                    if (response !== '') {
                        return true;
                    }
                    return 'Please enter a valid name!';
                }
            },
            {
                type: "input",
                name: "engId",
                message: "What is the id of the engineer?. (Required)",
                validate: response => {
                  if (response) {
                    if (idArr.includes(response)) {
                      return "This ID is already in use. Please enter a different ID number.";
                    } else {
                      return true;
                    }
        
                  }
                  return "Please enter an id greater than zero.";
                }
              },
              {
                type: "input",
                name: "engEmail",
                message: "What is the email of the engineer?. (Required)",
                validate: response => {
                  if (response) {
                    return true;
                  }
                  return "Please enter a valid email address.";
                }
              },
              {
                type: "input",
                name: "engGithub",
                message: "What is the GitHub username of the engineer?. (Required)",
                validate: response => {
                  if (response !== "") {
                    return true;
                  }
                  return "Please enter a valid username.";
                }
              }
        ]).then(response => {
            const engineer = new Engineer(response.engName, response.engId, response.engEmail, response.engGithub);
            teamMemberArr.push(engineer);
            idArr.push(response.engId);
            generateTeam();
        });
    }

    function addIntern() {
        inquirer.prompt([
          {
            type: "input",
            name: "intName",
            message: "What is the name of the intern?. (Required)",
            validate: response => {
              if (response !== "") {
                return true;
              }
              return "Please enter a valid name!";
            }
          },
          {
            type: "input",
            name: "intId",
            message: "What is the ID of the intern?. (Required)",
            validate: response => {
              if (response) {
                if (idArr.includes(response)) {
                  return "This ID is already in use. Please enter a different ID.";
                } else {
                  return true;
                }
    
              }
              return "Please enter an ID greater than zero.";
            }
          },
          {
            type: "input",
            name: "intEmail",
            message: "What is the email of the intern?. (Required)",
            validate: response => {
              if (response) {
                return true;
              }
              return "Please enter a valid email address.";
            }
          },
          {
            type: "input",
            name: "intSchool",
            message: "What is the school of the intern?. (Required)",
            validate: response => {
              if (response !== '') {
                return true;
              }
              return "Please enter a valid school name.";
            }
          }
        ]).then(response => {
            const intern = new Intern(response.intName, response.intId, response.intEmail, response.intSchool);
            teamMemberArr.push(intern);
            idArr.push(response.intId);
            generateTeam();
        });
    }

    function generateTeam() {
        // create the dist directory if the dist path doesn't exist
        if (!fs.existsSync(DIST_DIR)) {
          fs.mkdirSync(DIST_DIR)
        }
        fs.writeFileSync(distPATH, src(teamMemberArr), "utf-8");
      }
    
      renderManager();
}

teamMenu();
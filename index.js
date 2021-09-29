const inquirer = require("inquirer");
inquirer.prompt([
    {
    name: 'name',
    message: 'What is your name?',
    type: 'input'
    },
    {
    name: 'from',
    message: 'Where are you from?',
    type: 'input'
    },
   {
   name: 'github',
   message: 'What is your GitHub username?',
   type: 'input'
   },
   {
   name: 'linkedin',
   message: 'What is your Linkedin acount?',
   input: 'input'
   }])
 .then(function(answer){
    console.log(answer);
 });
const inquirer = require('inquirer');

 module.exports = class MenuController {
   constructor(){
     this.mainMenuQuestions = [
      {
       type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add new contact",
          "getDate",
          "Exit"
        ]
      }
    ];
    this.contacts = [];
   }

   main(){
     console.log(`Welcome to AddressBloc!`);
     inquirer.prompt(this.mainMenuQuestions).then((response) => {
       switch(response.mainMenuChoice){
         case "Add new contact":
           this.addContact();
           break;
         case "getDate":
           this.getDate();
           break;
         case "Exit":
           this.exit();
         default:
           console.log("Invalid input");
           this.main();
       }
     })
     .catch((err) => {
       console.log(err);
     });
   }

   clear(){
      //console.log("\x1Bc");
      console.log(this.contacts);
   }

   addContact(){
     this.clear();
     console.log('addContact called');
     this.main();
   }

   getDate(){
     this.clear();
     let currentDate = new Date();
     console.log(currentDate);
     this.main();
   }

   exit(){
     console.log("Thanks for using AddressBloc!");
     process.exit();
   }

   getContactCount(){
     return this.contacts.length;
   }

   remindMe() {
     return "Learning is a life-long pursuit"; 
   }
 }

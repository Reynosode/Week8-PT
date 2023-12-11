

class Teams { 
    //class Teams creates the blueprint for Teams objects. Those objects are defined by the 'new' syntax before the class name. 
    //the following descriptors will be applied. name, color, homeCity, and stadium
    constructor (name, color, homeCity, stadium) {
        this.name = name; //this.name references the parent element, so instead of writting Teams.name
        this.color = color;
        this.homeCity = homeCity;
        this.stadium = stadium;
    }

    describe(){ //This function will run when I use "this.teams[teamChoice].describe()" in my return in the showSelectedTeam() function. 
    return `We are the ${this.homeCity} ${this.name}, our team home color is ${this.color}. Our home field is ${this.stadium}.`
   } 
}


class Menu {
    constructor(){
       this.teams = [];
    }

    optionSelected(){
        // My optionSelected will run when I call the instance I created of the Menu class. This will start off the project and provide functionality to my menu that is displayed
        // by the displayMenu() function.
        let choice = this.displayMenu();
        
        while (choice != 0){
            // this while loop will run the switch case as long as the choice variable does not equal 0 since otherwise that would equal false and the while loop would end and -
            // thus running my alert.
            switch(choice){
                case '1':
                    this.showSelectedTeam(); //if 1 is returned in displayMenu() then this.showSelectedTeam() will run.
                    break;
                case '2':
                    this.addTeam();
                    break;
                case '3':
                    this.deleteTeam();
                    break;       
                default: //if anything other then the options above is selected then 'choice = 0' will end the loop and exit the menu.
                    choice = 0
            }
            choice = this.displayMenu();
            console.log(choice);
        } alert('What have you done??!') // haha
    }

    displayMenu(){
        // By returning the prompt below. Whatever input is inserted to the prompt the displayMenu() will become that value. therefore it becomes my selection and is used -
        // in the optionSelected() function. ps. the prompt creates a box message that awaits a user input.
        return prompt(`
        Main Menu
        -----------------------
        0) Exit 
        1) View & Select a Team
        2) Add Team
        3) Delete Team
        `);
    }

    viewTeams(){ // this function is called in my showSelectedTeam() function which that is called in my optionSelected() function above.
        let allTeams = ' '; // this creates a variable that allows me to store a concatenated string.
        for (let i = 0; i < this.teams.length; i++){ // The for loop allows me to iterate through my teams arrow allowing me to get the index values.
        allTeams += i + ' : ' + this.teams[i].name + '\n'; // I then use the newly acquired index values to display my teams list.
        }
        return prompt(allTeams); // This prompt displays said list.
    }

    showSelectedTeam(){
        let teamChoice = this.viewTeams(); // I set the variable teamChoice to the return of the viewTeams() which is the user input of what team is wished to be viewed.
            
        if (teamChoice > -1 && teamChoice < this.teams.length){ // I then use that variable to create a if statement, and if the teamChoice is true then it will return the prompt -
                                                                // that calls the describe() function that is stored in my Teams class.
            return prompt(this.teams[teamChoice].describe());
        
        } else this.displayMenu(); // If false then it will display the menu again 

    }

    addTeam(){
        let name = prompt('Insert team name.'); // The four variables that are declared below are what is needed for the Teams constructor. 
        let color = prompt("What's your team color?");
        let homeCity = prompt("What city is your team based in?");
        let stadium = prompt("Input stadium name.");

        this.teams.push(new Teams(name, color, homeCity, stadium)); // This will push a new Teams object to the this.teams array which starts to create the list.
    } 

    deleteTeam(){
        let teamChoice = this.viewTeams(); // By declaring this variable again to this.viewTeams(), it allows me to return a user selection that I can then input to an if statement.

        if (teamChoice > -1 && teamChoice < this.teams.length){ // This if statement validates the user input and if its true then it will delete the selected time via -
            this.teams.splice(teamChoice);                                // the splice function.
        return this.viewTeams;
        }
    } 
}


let menu = new Menu() // This creates an instance of the Menu class
menu.optionSelected() // And this allows me to start the Menu that I have programmed.




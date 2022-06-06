var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10; 

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);


// var enemyName = "Roborto"; Replacing with an array to allow for multiple robots
var enemyNames = ["Roborto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12; 

console.log(enemyNames);

for (var i=0; i < enemyNames.length; i++){
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}

for ( var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}
// creat function fight
var fight = function(enemyName){
    // alert players that they are starting the round
    // window.alert("Welcome to Robot Gladiators!");
    // repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0 ){
        var promptFight = window.prompt("Would you like to FIGHT of SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player chooses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            // remove enemy's heath by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log( 
                playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
             );
            
            //  check enemys health 
            if (enemyHealth <= 0) {
               window.alert(enemyNames + " has died!");
             } else {
                window.alert(enemyNames + " still has " + enemyHealth + " health left.")
             }
    
              // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
    
            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
    
            // if player choses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            window.alert( playerName + " has chosen to skip the fight!");
            // confirm the player wants to skip 
            var confirmSkip = window.confirm("Are you sure you'd like to quit? ");
    
            // if yes (true), leave fight
            if (confirmSkip){
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = playerMoney - 2; 
            }
            // if no (false), ask the question again by running fight() again
            else {
                fight();
            }
        } else {
            window.alert("You need to choose a valid option. Try again!");
        }
    }
    
    }



// execute function fight no longer need - due to use of for loop above code
// fight();
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
//Alert players that they are starting the round.
    window.alert("Welcome to Robot Gladiators!");

//Subtract the value of 'playerAttack from the value of 'enemyHealth' and use the result to update the value in the 'enemyHealth' variable.
enemyHealth = enemyHealth - playerAttack;    
//Log a resulting message to the console so we know that it worked.
console.log(    
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

//Check enemy's health

if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}
//Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in teh 'playerHealth' variable.
playerHealth = playerHealth - enemyAttack;
//Log a resulting message to the console so we know that it worked.
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
)

if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
}
else {
    window.alert(playerName + "still has " + playerHealth + " health left.");
}

};

fight();

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

//if a player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    //remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

        //Check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    } else {
        window.alert(enemyName + " still has" + enemyHealth + " health remaining.");
    }

    //remove player's health by subtracting amount set in the enemyAttack from playerHealth.
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    //check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }  else {
        window.alert(playerName + " still has " + playerHealth + " health remaining."
        );
    }
//if player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm if the player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes(true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    //if no(false), ask question again by running fihgt() again
    else {
        fight();
    }
} else {
    window.alert("You need to choose a valid option. Try again!");
}

// function to start a new game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
      if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
        var pickedEnemyName = enemyNames[i];
  
        enemyHealth = 50;
  
        fight(pickedEnemyName);
      }
      else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
    }
    //play again
    startGame();
    //after the loop ends, player is either out of helth or enemies to fight so run the endgame function
    endGame();
  };

  //start the game when the page loads
  startGame();

  //function to end the entire game
  var endGame = function() {
      window.alert("The game has now ended. Let's see how you did!");
  };
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + " .");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

// ask if the player wants to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
    startGame();
}
else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
// There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat.


// You attack the first alien ship
// If the ship survives, it attacks you
// If you survive, you attack the ship again
// If it survives, it attacks you again ... etc
// If you destroy the ship, you have the option to attack the next ship or to retreat
// If you retreat, the game is over, perhaps leaving the game open for further developments or options
// You win the game if you destroy all of the aliens
// You lose the game if you are destroyed
// ------------------------------------------------------------------------------------------------

//A player/Enemy object for class to refer to and furture reassignment of values
// let playerShip = {
//     name: "Player 1",
//     hull: 20,
//     // maxHull: 20,
//     // currentHull: 20,
//     firepower: 5,
//     accuracy: 0.7,
//     //Furture ideas for stats
//     // # of missiles, shield strenght, manuvarability
// }
// let enemyShip = {
//     name: "The Big Bad",
//     hull: 20,
//     firepower: 5,
//     accuracy: .7
// }

// Keeps Track of the current turn - Odd Player - Even Enemy
let currentTurn = 1;

//Variable that are beign used
var cLog = [" ", " ", " ", " ", " "];
let message = "Attack Hit";
//Used to check if the last blank in the array has a message in function combatLog()
let blankChecked = 0;

//Variable to store HTML elements
let player = {};
let enemy = {};




//Class for the player, tracks name(maybe), hull(hp), firepower(damage), accuracy
class PlayerShip {
    constructor() {
        this.name = "Player 1";
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = .7;
        this.lazerAtk();
    }

   
    //Players Lazer Attack the enemy calls hit function and returns damage
    lazerAtk() {
        console.log("Activate Lazer");
        if (this.accuracy >= Math.random(.1, 1).toFixed(1)){
            // enemy.hull -= this.firepower;
            message = this.name + " Lazer Hit!";
            document.getElementById('pHull').innerHTML = this.hull;
            console.log("Lazer Hit" + player.hull);
        }else{
            message = this.name + " Lazer Missed";
        }
         
    }
}

player = new PlayerShip();

//Class for the enemy, tracks name(maybe), hull(hp), firepower(damage), accuracy
class EnemyShip {
    constructor() {
        this.name = "The Big Bad";
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = .7;
    }

    lazerAtk() {
        if (this.accuracy >= Math.random(.1, 1).toFixed(1)){
            player.hull -= this.firepower;
            message = this.name + " Lazer Hit!";
            
            document.getElementById('pHull').innerHTML = this.hull;
            combatLog();
        }else{
            message = this.name + " Lazer Missed";
            combatLog();
        }
         
    }
}

enemy = new EnemyShip();


//function for 
function lazerAtk() {
    player.lazerAtk(enemy);
    combatLog();
    //determines what attack the enemy will do
    if (enemy.hull > 0){
        let enemyAtk = Math.random(0, 1);
        if (enemyAtk === 0){
            enemy.lazerAtk();
        }else{
            // make the nemey use a missle attack
        }
    }
    
    checkLost();
}

//
function checkLost() {
    if(enemy.hull <= 0){
        enemy.Hull = 0;
        message = "Enemy Shot Down!"
    }

    if(player.hull <= 0){
        player.hull = 0
        message = "You have been shot down!"
    }

    combatLog();
}

// Function to reset game if player chooses to
function reset() {
    window.location.reload()
}

// Function to reset the game
function gameOver() {
    message = "GAME OVER! Reset To Play Again";
}
 
//Function to used to change the displayed message in combat log
function combatLog() {
    //Loops through an array and assigns the new message to it
    console.log("combatLog");
    
    for (i = 0; i < 5; i++) {
        //checks to see if all 
        if (blankChecked > 0){
            switch (i) {
                case 0:
                    console.log("case 1");
                    cLog[i] = message;
                    console.log(cLog[i]);
                    i = 5;
                    break;
                case 1:
                    cLog[i] = message;
                    console.log(cLog[i]);
                    i = 5;
                    break;
                case 2:
                    cLog[i] = message;
                    console.log(cLog[i]);
                    i = 5;
                    break;
                case 3:
                    cLog[i] = message;
                    console.log(cLog[i]);
                    i = 5;
                    break;
                case 4:
                    cLog[i] = message;
                    console.log(cLog[i]);
                    i = 5;
                    blankChecked = 1;
                    break;
            }
        }else{
            cLog[i] = cLog[i + 1];

            if (i === 4) {
                cLog[4] = message;
            }
        }
    }
}

function testing(){
    combatLog();
    document.getElementById("log1").innerHTML = cLog[0];
    document.getElementById("log2").innerHTML = cLog[1];
    document.getElementById("log3").innerHTML = cLog[2];
    document.getElementById("log4").innerHTML = cLog[3];
    document.getElementById("log5").innerHTML = cLog[4];
}

document.getElementById("lazer").addEventListener("Click", combatLog());


console.log("works")

const counterIsThree = document.getElementById("three")
const counterIsFive = document.getElementById("five")
const counterIsNine = document.getElementById("nine")
const counterIs12 = document.getElementById("twelve")

const triesTotal = document.getElementById("tries_total")
const counterTries = document.getElementById("counter_tries")

const yoursWins = document.getElementById("yours_wins")
const compsWins = document.getElementById("comps_wins")
let yoursWinsNum = 0;
let compsWinsNum = 0;



let tryCount=3;
counterIsThree.addEventListener("click", ()=> tryCount = 3)
counterIsFive.addEventListener("click", ()=> tryCount = 5)
counterIsNine.addEventListener("click", ()=> tryCount = 9)
counterIs12.addEventListener("click", ()=> tryCount = 12)
console.log(tryCount)




const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// const tryCount = document.getElementsByName("try_count")


rock.addEventListener("click", choosedHand)
paper.addEventListener("click", choosedHand)
scissors.addEventListener("click", choosedHand)

const newGame = document.getElementById("new_game");
const flowResults = document.getElementById("flow_results");


const handsArray = ["ROCK", "PAPER", "SCISSORS"]

let counter = 1;




function choosedHand() {
    let compsHand = Math.floor(Math.random() * 3)
    let myHand = this.value;


    console.log("you choose" + " " + myHand)
    console.log("comp chooses" + " " + handsArray[compsHand])

    console.log(tryCount)
    triesTotal.innerHTML = tryCount;
    counterTries.innerHTML = counter;

    form_try_count.style.display = "none";
    gameIn.style.display = "block"

    if( (compsHand === 0 && myHand === "PAPER") ||
        (compsHand === 1 && myHand === "SCISSORS") ||
        (compsHand === 2 && myHand === "ROCK")){
        console.log("You win")
        yoursWinsNum++;
        yoursWins.innerHTML = yoursWinsNum;

    } else if(handsArray[compsHand] === myHand){
        console.log("DRAW")
    } else{
        console.log("Comps win")
        compsWinsNum++;
        compsWins.innerHTML = compsWinsNum;
    }
    if( Number(tryCount/yoursWinsNum)<2 || Number(tryCount/compsWinsNum)<2 ){
        console.log("game over")
        newGame.style.display="inline-block";
        if(yoursWinsNum>compsWinsNum){
            flowResults.innerHTML = "you win";
            flowResults.style.color = "green"

        } else {
            flowResults.innerHTML = "comps win";
            flowResults.style.color = "red"
        }
    }
    counter++

}





const counterSetCustom = document.getElementById("set_try_counter")
const displayCustom = document.getElementById("custom_num_form")
const guessNumber = document.getElementById("guess_number");

const formTryCount = document.getElementById("form_try_count");
const gameIn = document.getElementById("game_in");

// const counterTries = document.getElementById("counter_tries");
// const triesTotal = document.getElementById("tries_total");
const btn = document.getElementById("btn");

// const flowResults = document.getElementById("flow_results");
// const newGame = document.getElementById("new_game");

newGame.style.display = "none"

let randomNumber = Math.floor(Math.random() * 100);
// let tryCount = 4;
// let counter = 1;



// function setFour() {
//     displayCustom.style.display = "none"
//     tryCount = 4;
// }
// function setFive() {
//     displayCustom.style.display = "none"
//     tryCount = 5;
// }
// function setSix() {
//     displayCustom.style.display = "none"
//     tryCount = 6;
// }

// function setCustom() {
//     tryCount = counterSetCustom.value;
// }

function showInputField() {
    counterSetCustom.value = null;
    displayCustom.style.display = "inline-block";

}





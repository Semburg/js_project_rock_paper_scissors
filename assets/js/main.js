
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

let showInformations = document.getElementById("show_nformations")

// const tryCount = document.getElementsByName("try_count")


rock.addEventListener("click", choosedHand)
paper.addEventListener("click", choosedHand)
scissors.addEventListener("click", choosedHand)

// rock.addEventListener("click", fadeOutEffect)



const compsChoose = document.getElementById("comps_choose")

const newGame = document.getElementById("new_game");
const flowResults = document.getElementById("flow_results");


const handsArray = ["ROCK", "PAPER", "SCISSORS"]

let counter = 1;


function fadeOutEffect() {

    let fadeEffect = setInterval(function (){
        compsChoose.style.opacity = 0.5;
        if(!compsChoose.style.opacity){
            compsChoose.style.opacity = 1;
        }else if(compsChoose.style.opacity > 0){
            compsChoose.style.opacity -= 0.1;
        }else {
            clearInterval(fadeEffect);
        }
    },200);
}


function choosedHand() {
    let compsHand = Math.floor(Math.random() * 3)
    let myHand = this.value;
    compsChoose.style.opacity = 0.5;

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
        showInformations.innerHTML =`Your ${myHand} beats Comp's ${handsArray[compsHand]}`
        showInformations.style.color = "green"



    } else if(handsArray[compsHand] === myHand){
        console.log("DRAW")
        showInformations.innerHTML =`Your ${myHand} vs Comp's ${handsArray[compsHand]} - DRAW`
        showInformations.style.color = "#666"

    } else{
        console.log("Comps win")
        compsWinsNum++;
        compsWins.innerHTML = compsWinsNum;
        showInformations.innerHTML =`Your ${myHand} loses to Comp's ${handsArray[compsHand]} `
        showInformations.style.color = "red"
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


const gameIn = document.getElementById("game_in");
// newGame.style.display = "none"

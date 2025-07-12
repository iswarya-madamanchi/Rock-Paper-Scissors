let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const usersc=document.querySelector("#user-score");
const compsc=document.querySelector("#comp-score");

const getcompchoice=()=>{
    const options=["Rock", "Paper", "Scissors"];
    const randindx=Math.floor(Math.random()*3);
    return options[randindx];
}

const showwinner=(userwin, userChoice, compChoice)=>{
    if(userwin){
        userscore++;
        usersc.innerText=userscore;
        console.log("You Win!");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compsc.innerText=compscore;
        console.log("You Lose!");
        msg.innerText=`You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const gameDraw=()=>{
        console.log("Game was draw");
        msg.innerText="Game was Draw, Play Again!";
        msg.style.backgroundColor="orange";
}

const playGame=(userChoice)=>{
    console.log("user choice = ", userChoice);
    const compChoice=getcompchoice();
    console.log("comp choice = ", compChoice);

    if(userChoice===compChoice){
        gameDraw();
    }
    else{
        let userwin=true;
        if(userChoice==="Rock"){
            //paper, scissors
            userwin=compChoice==="Paper"?false:true;
        }
        else if(userChoice==="Paper"){
            //scissors, rock
            userwin=compChoice==="Scissors"?false:true;
        }
        else{
            //rock, paper
            userwin=compChoice==="Rock"?false:true;
        }
        showwinner(userwin, userChoice, compChoice);
    }  
}

choices.forEach((choice)=>{
     choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
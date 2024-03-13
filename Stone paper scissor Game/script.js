let userScore=0;
let compScore=0;


const  choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genCompChoice=()=>{
    const options=["stone","paper","scissors"];
    //Math.random()-->generate values between 0 to 1
    //here Math.random()*3-->bcz to generate values between 0 to 2
    // if Math.random()*10-->bcz to generate values between 0 to 9
    //Math.floor-->to remove decimal values
    //Math.floor(Math.random()*3)-->will generate values between 0 to 2 without decimals
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};


//DrawGame
const drawGame=()=>{
    //console.log("Game was draw");
    msg.innerText="Game was draw. Play again";
    msg.style.backgroundColor="#081b31";
};



//winner time
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You win!");
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        //console.log("You lose!");
        msg.innerText=`You lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}



//Game playing via userChoice & compChoice
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    //Generative computer choice->modular
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);

    if(userChoice===compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="stone"){
            //scissors, paper
            userWin=compChoice==="paper"?false:true;
        } else if(userChoice==="paper"){
            //stone,scissors
            userWin=compChoice==="scissors"?false:true;
        } else{
            //stone,paper
            userWin=compChoice==="stone"?false:true;
        }
      showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
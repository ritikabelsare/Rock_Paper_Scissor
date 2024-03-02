let userScore =0;
let compScore=0;
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg1");
const resetBtn = document.querySelector("#reset-btn");
const msg2 =document.querySelector("#msg2");
const rock = document.querySelector("#rock");

choices.disabled=true;

const genCompChoice =() =>
{
    //rock,paper,scissors
    const option = ["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
};

const drawGame =()=>
{
    if(userScore<=9  && compScore<=9)
    {
        msg.innerText="Game Draw";
        msg.style.backgroundColor="#081b31";
    }
};

const disabledChoices=()=>
{
    for(let choice of choices)
    {
        console.log("You are in disabled...");
        choice.disabled=true;
    }
};

const enabledChoices=()=>
{
    for(let choice of choices)
    {
        choice.disabled=false;
        choice.innerText="";
    }
}

const winner=(userScore,compScore)=>
{
    if(userScore==10 && userScore>compScore )
    {
        msg2.classList.remove("hide"); 
        msg2.innerText="Congratulations You Win the Game";
    }
    else if(compScore==10 && userScore<compScore)
    {
        msg2.classList.remove("hide");
        msg2.innerText="Sorry! You Lost the Game";
    }
    // if(userScore==10 || compScore==10){

    // }
};


const showWinner=(userWin,userChoice,compChoice)=>
{
    if(userScore<=9 && compScore<=9)
    {
        if(userWin)
        {
            userScore++;
            userScorePara.innerText=userScore;
            msg.innerText=`You Win! Your  ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor="green";
        }
        else{
            compScore++;
            compScorePara.innerText=compScore;
            msg.innerText=`You Lose ${compChoice} beats Your ${userChoice}`;
            msg.style.backgroundColor="red";
        }
        winner(userScore,compScore);
    }
    
};

const playGame =(userChoice)=>
{
    const compChoice =genCompChoice();

    if(userChoice===compChoice)
    {
        //draw game
        drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice === "rock")
        {
            //scissors, paper
            userWin=compChoice==="paper"?false:true;

        }else if(userChoice ==="paper"){
            //computer generate : rock,scissors
            userWin=compChoice==="scissors"? false:true;
        }else{
            //comp - rock,paper
            userWin=compChoice ==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>
    {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});

const reset = ()=>
{
    userScore=0;
    compScore=0;
    userScorePara.innerText=userScore;
    compScorePara.innerText=compScore;
    disabledChoices();
    msg2.classList.add("hide");
    choices.classList.remove("hide");
}

resetBtn.addEventListener("click",reset);


// element

const inputEl=document.querySelector('.number');
const buttonEl=document.querySelector('.btn');
const errorEl=document.querySelector('.error-message');
const scoreEl=document.querySelector('.score')

// global variable

const randomNumber=Math.floor(Math.random()*100+1);
let score=20;
// add Event Listener

buttonEl.addEventListener("click",function(){
    const userInput=Math.ceil(Number(inputEl.value));
    console.log(userInput);

    //input validation

    if
    (userInput<1||userInput>100){
        errorEl.style.display="block";
        errorEl.innerText="enter valid input";
    }
    else{
        if(score>0){
            // validation correct score
            if(userInput===randomNumber){
                errorEl.style.display='block';
                errorEl.style.color='green';
                errorEl.innerText=randomNumber;
                errorEl.innerText='you won & your score is'+score
            }
            else{
                if(userInput>randomNumber)
                {
                    errorEl.style.display='block';
                    errorEl.style.color='red';
                    errorEl.innerText='your guess is high'
                    score=score-1;
                }
                else{
                    errorEl.style.display='block';
                    errorEl.style.color='red';
                    errorEl.innerText='your guess is low'
                    score=score-1;
                }
                }
                scoreEl.innerText=score;
            }
        else{

            errorEl.style.display='block';
            errorEl.style.color='red';
            errorEl.innerText='game over';
        }
    }
})


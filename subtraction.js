const num1 = Math.ceil(Math.random() * 100);
const num2 = Math.ceil(Math.random() * 10);

// dynamically setting the question

const question = document.querySelector("#question");

question.textContent = `what is ${num1} minus ${num2} ?`;

//setting correct answer 

const correctAnswer = num1 - num2;

/* 
getting the user input as user answer
by getting the input value when submitted 
then checking if its correct 

*/
const scores = document.querySelector("#score");

let score = JSON.parse(localStorage.getItem("score"));

if(!score | score < 0){
    score = 0;
}


scores.textContent = `score : ${score}`;
const formElement = document.querySelector("#formelement");
const inputElement = document.querySelector("#answer");

formElement.addEventListener("submit", () => {
    const userAnswer = +inputElement.value;
    if(userAnswer === correctAnswer){
        score = score + 5;
        updateLocalStorage()
    } else{
        score = score - 5;
        updateLocalStorage()
    }

});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}








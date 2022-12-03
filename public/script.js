const question = document.querySelector('#question');
const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const answer4 = document.querySelector('#answer4');

function fillQuestionsElements(data){
    question.innerText = data.question;
    for(const i in data.answers){
        const answerButton = document.querySelector(`#answer${Number(i)+1}`);
        answerButton.innerText = data.answers[i];
    };
}

function showNextQuestion(){
    fetch('/question',
{
        method: 'GET',
    })
    .then(r => r.json())
    .then(data => {
      fillQuestionsElements(data);
    })
}

// TODO: kontynuuj od 33 minuty: https://www.udemy.com/course/kurs-nodejs-express-mongodb/learn/lecture/15088554#overview

showNextQuestion();
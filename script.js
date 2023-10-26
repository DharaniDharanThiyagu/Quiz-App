const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "A) London", correct: false },
      { text: "B) Berlin", correct: false },
      { text: "C) Madrid", correct: false },
      { text: "D) Paris", correct: true }
    ]
  },
  {
    question: "Which planet is closest to the Sun?",
    answers: [
      { text: "A) Venus", correct: false },
      { text: "B) Earth", correct: false },
      { text: "C) Mars", correct: false },
      { text: "D) Mercury", correct: true }
    ]
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers: [
      { text: "A) Charles Dickens", correct: false },
      { text: "B) William Shakespeare", correct: true },
      { text: "C) Jane Austen", correct: false },
      { text: "D) Leo Tolstoy", correct: false }
    ]
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "A) Au", correct: true },
      { text: "B) Ag", correct: false },
      { text: "C) Fe", correct: false },
      { text: "D) Cu", correct: false }
    ]
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    answers: [
      { text: "A) Oxygen", correct: false },
      { text: "B) Carbon Dioxide", correct: true },
      { text: "C) Nitrogen", correct: false },
      { text: "D) Hydrogen", correct: false }
    ]
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "A) Earth", correct: false },
      { text: "B) Venus", correct: false },
      { text: "C) Jupiter", correct: true },
      { text: "D) Saturn", correct: false }
    ]
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: [
      { text: "A) China", correct: false },
      { text: "B) South Korea", correct: false },
      { text: "C) Japan", correct: true },
      { text: "D) Thailand", correct: false }
    ]
  },
  {
    question: "Who is credited with inventing the World Wide Web (WWW)?",
    answers: [
      { text: "A) Bill Gates", correct: false },
      { text: "B) Steve Jobs", correct: false },
      { text: "C) Tim Berners-Lee", correct: true },
      { text: "D) Mark Zuckerberg", correct: false }
    ]
  },
  {
    question: "What is the largest mammal on Earth?",
    answers: [
      { text: "A) African Elephant", correct: false },
      { text: "B) Blue Whale", correct: true },
      { text: "C) Giraffe", correct: false },
      { text: "D) Polar Bear", correct: false }
    ]
  },
  {
    question: "In which year did Christopher Columbus first reach the Americas?",
    answers: [
      { text: "A) 1492", correct: true },
      { text: "B) 1620", correct: false },
      { text: "C) 1776", correct: false },
      { text: "D) 1812", correct: false }
    ]
  }
];

// You can continue to add more questions and answers to the 'questions' array as needed.

  const questionElement=document.getElementById("question")
  const answerButton=document.getElementById("answer-buttons")
  const nextButton=document.getElementById("next-btn")
  
  let currentQuestionIndex=0;
  let score=0;
  function startQuiz()
  {
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next"
    showQuestion()


  }
  function showQuestion()
  {
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question
    console.log(questionNo)
    currentQuestion.answers.forEach(answers=>{
        const button=document.createElement("button")
        button.innerHTML=answers.text
        button.classList.add('btn');
        answerButton.appendChild(button)
        if(answers.correct)
        {
            button.dataset.correct=answers.correct
        }
        button.addEventListener('click',selectAnswer);
    })
  }
  function resetState()
  {
    nextButton.style.display="none"
    while(answerButton.firstChild)
    {
answerButton.removeChild(answerButton.firstChild)
    }
  }
   function selectAnswer(e)
  {
const selectedBtn=e.target;
const isCorrect=selectedBtn.dataset.correct==="true"
if(isCorrect)
{
    selectedBtn.classList.add("correct")
    score++
}
else
{
    selectedBtn.classList.add("incorrect")

}
Array.from(answerButton.children).forEach(button=>{
    if(button.dataset.correct==="true")
    {
        button.classList.add("correct")
    }
    button.disabled=true
})
nextButton.style.display="block"
  }
  function showScore()
  {
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}`
    nextButton.innerHTML="play Again";
    nextButton.style.display="block"
  }
  function handleNextButton()
  {
    currentQuestionIndex++;
       if(currentQuestionIndex < (questions.length))
       {
        showQuestion();
       }
       else{
       showScore();
       }
  }
  nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length)
    {
        handleNextButton();
    }
    else{
       startQuiz();  
    }
  })
  startQuiz();

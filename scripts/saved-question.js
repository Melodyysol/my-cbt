  import { generalQuest } from "./questions.js";

  const questionContainer = document.querySelector('.quest-container')
  const answerMessage = document.querySelector('.message')
  let displayAns = ''
  let questionHTML = '';
  questionWraps()
  function questionWraps () {
    generalQuest.forEach((inform,index) => {
      questionHTML  += `
      <div class="quest-cont">
        <div class="quest-num">Question ${inform.questNum}</div>
        <div class="instruction">
          ${inform.question}
        </div>
        <ol>
          ${inform.options}
        </ol>
        <div class="subj-del">
          <div class="eng">(english language - 2021)</div>
          <div class="delete-icon" onclick="
            generalQuest.splice(${index},1)
            questionWraps()
          ">Delete</div>
        </div>
        <div>
          <div class="solution">
            <button data-answer-id="${inform.id}" class="answer">View Answer</button>
            <button class="correction">View Correction</button>
          </div>
          <!--Show-->
          <div class="the-afric show">${inform.correction}</div>
          </div>
      </div>
      `
    })
  }
  
  generalQuest.forEach(inform => {
    displayAns += `
    <div class="back-mess">
      <div class="corr-ans">Correct Answer</div>
      <div class="ans-value">The correct answer to the question is <br>Option ${inform.ans}</div>
      <div class="close">Close</div> 
    </div>
    `
    questionWraps()
  })

  questionContainer.innerHTML = questionHTML;

  
  document.querySelectorAll('.answer').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.message').forEach(link => {
        link.classList.remove('show')
      })
    })
  })
  answerMessage.innerHTML = displayAns;
  document.querySelectorAll('.close').forEach((link) =>{
    link.addEventListener('click', () => {
      answerMessage.classList.add('show')
    })
  })

  document.querySelectorAll('.correction').forEach((value) => {
    value.addEventListener('click', () =>{
      document.querySelectorAll('.the-afric').forEach((link) => {
        if(value.innerHTML === 'View Correction'){
          value.innerHTML = 'Hide Correction'
          link.classList.remove('show');
        }else if(value.innerHTML === 'Hide Correction'){
          value.innerHTML = 'View Correction'
          link.classList.add('show')
        }
      })
    })
  })
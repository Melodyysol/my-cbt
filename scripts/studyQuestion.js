import { questions } from "./data/infomation.js";
import { matchOption } from "./data/option.js";
import { bookmarkQuestion, generalQuest, GeneralQuestion, mainOption, removeQuestion } from "./data/questions.js";
import { questionType } from "./data/questionType.js";

  renderSavedHTML()
  export function renderSavedHTML() {
    const questionContainer = document.querySelector('.quest-container')
    let displayAns = ''
    let questionHTML = '';

    function questionWraps () {
      questions.forEach((quest) => {

        const questId = quest.id;
        const matchingOption = matchOption(questId)
        let matchingQuestionOption;
        questionType.forEach(question => {
          if(matchingOption.questionTypeId === question.questionTypeId){
            matchingQuestionOption = question;
          }
        })

        questionHTML  += `
        <div class="quest-cont js-quest-cont-${questId}"">
          <div class="quest-num">Question ${quest.questNum}</div>
          <div class="instruction">
            ${quest.question}
          </div>
          <div class="opts">${mainOption(matchingOption)}</div>
          <div class="subj-del">
            <div class="eng">(${matchingQuestionOption.name} - 2021)</div>
            <div class="delete-icon js-bookmark-icon" data-quest-id="${questId}">Bookmark</div>
          </div>
          <div>
            <div class="solution">
              <button data-answer-id="${questId}" class="answer js-answer">View Answer</button>
              <button data-answer-id="${questId}" class="correction js-correction js-correction-${questId}">View Correction</button>
            </div>
            <!--Show-->
            <div class="the-afric"><br>${quest.correction}</div>
            </div>
        </div>
        `

        displayAns += `
          <div class="message js-message js-message-${quest.id}">
            <div class="back-mess js-back-mess">
              <div class="corr-ans">Correct Answer to No.${quest.questNum}</div>
              <div class="ans-value">The correct answer to the question is <br>Option ${quest.ans}</div>
              <div class="close js-close-button" data-answer-id="${quest.id}">Close</div> 
            </div>
          </div>
          `
      })
      questionContainer.innerHTML = questionHTML;
    }
    questionWraps()




    document.querySelectorAll('.js-bookmark-icon').forEach(link => {
      link.addEventListener('click', () => {
        const questId = link.dataset.questId;
        let matchingQuest;
        GeneralQuestion()
        questions.forEach(quest => {
          if(questId === quest.id) {
            matchingQuest = quest;
          }
        })
        if(matchingQuest) {
          bookmarkQuestion(questId, matchingQuest)
          console.log(generalQuest)
        }
        renderSavedHTML()
        
      })
    })

    function viewAnswer() {
      document.querySelectorAll('.js-answer').forEach((answer) => {
        answer.addEventListener('click', () => {
          const answerId = answer.dataset.answerId;
          document.querySelector(`.js-message-${answerId}`).classList.add('is-editing')
        })
      })
      document.querySelector('.js-answer-message').innerHTML = displayAns;
    
      document.querySelectorAll('.js-close-button').forEach(close => {
        close.addEventListener('click', () => {
          const answerId = close.dataset.answerId;
          document.querySelector(`.js-message-${answerId}`).classList.remove('is-editing')
        })
      })
    }
    viewAnswer()
    function viewCorrection() {
      document.querySelectorAll('.js-correction').forEach((answer) => {
        answer.addEventListener('click', () =>{
          const answerId = answer.dataset.answerId;
          const isPresent = document.querySelector(`.js-correction-${answerId}`).innerHTML === 'View Correction'
          if(isPresent) {
            document.querySelector(`.js-quest-cont-${answerId}`).classList.add('is-editing-quest')
            document.querySelector(`.js-correction-${answerId}`).innerHTML = 'Hide Correction'
          }else{
            document.querySelector(`.js-quest-cont-${answerId}`).classList.remove('is-editing-quest')
            document.querySelector(`.js-correction-${answerId}`).innerHTML = 'View Correction'
          }
        })
      })
    }
    viewCorrection()
  }
import { generalQuest, mainOption, removeQuestion } from "../data/questions.js";
import {  matchOption } from "../data/option.js";
import { questionType } from "../data/questionType.js";
import { questions } from "../data/infomation.js";


export function renderQuestionHTML() {
  const eachQuestion = document.querySelector('.subject')
  let filterQuestions = questions;

  function mainQuestion() {
    let question = [];
    let html = '';
    let generalQuestHTML = '';
    const url = new URL(window.location.href)
    const questionId1 = url.searchParams.get('questionId1')
    const questionId2 = url.searchParams.get('questionId2')
    const questionId3 = url.searchParams.get('questionId3')

    filterQuestions = questions.filter(quest => {
      let matchSeletedQuest;
      if(quest.selectedQuestId === questionId1 || quest.selectedQuestId === questionId2 || quest.selectedQuestId === questionId3) {
        matchSeletedQuest = quest
      }else if(quest.selectedQuestId === '1'){
        matchSeletedQuest = quest
      }

      return matchSeletedQuest;
    })

    filterQuestions.forEach((quest) => {
      const questId = quest.id;
      const matchingOption = matchOption(questId)
      let matchingQuestionOption;
      questionType.forEach(question => {
        if(matchingOption.questionTypeId === question.questionTypeId){
          matchingQuestionOption = question;
        }
      })

      const eng = quest.selectedQuestId === '1' ? 'English Lang.' : 'English Lang.'
      const math = quest.selectedQuestId === '2' ? 'Mathematics' : ''
      const gen = quest.selectedQuestId === '3' ? 'Gen. Paper' : ''
      


      document.querySelector('.js-examine-1').innerHTML = matchingQuestionOption.name

      html= `
        <div class="menu2-div">
          <div>
            <div>Question ${quest.questNum}</div>
            <div>Time left: <span><span class="js-minute">20</span> : <span class="js-seconds">00</span></span></div>
          </div>
          <div class="submit-div js-submit">Submit</div>
        </div>
        <div class="question-name">
          <div class="eng">${eng}</div>
          <div class="eng js-math-${quest.id}">${math}</div>
          <div class="eng">${gen}</div>
        </div>
      `

      generalQuestHTML += `
      <div class="quest-cont js-quest-cont-${quest.id}">
        <div class="quest-num">Question ${quest.questNum}</div>
        <div class="instruction">
          ${quest.question}
        </div>
        <div class="opts">
        ${mainOption(matchingOption)}
        </div>
        <div class="subj-del">
          <div class="eng-small">(${matchingQuestionOption.name} - 2021)</div>
        </div>
      </div>
      `;
    });

    document.querySelector('.js-submit-subject').innerHTML = html;
    eachQuestion.innerHTML = generalQuestHTML 
    
  }
  mainQuestion()
  const submit =  document.querySelector('.js-submit')
  let timeInterval;
  submit.addEventListener('click',() => {
    // document.body.innerHTML = 'Are you sure you want to submit?'
    endQuiz()
  })
  function Time() {
    // eachQuestion.innerHTML = '';
    let time = 60;
    let timeMinute = 19
    timeInterval = setInterval(() => {
      if(time <= 60 && time > 0) {
        time--
      }else if(time <= 0){
        time = 59
        timeMinute--
      }

      if(timeMinute <= 0 && time <= 0) {
        clearInterval(timeInterval)
        endQuiz()
      }
      document.querySelector('.js-seconds').innerHTML = time < 10 ? '0' + time : time
      document.querySelector('.js-minute').innerHTML = timeMinute < 10 ? '0' + timeMinute : timeMinute
    }, 1000)
  }
  Time()

  function endQuiz() {
    clearInterval(timeInterval)
    let endQuizHTML = ''
    let totalQuest = 0
    let matching;
    let totalAns = 0;
    let attempted = 0;
    filterQuestions.forEach(quest => {
      totalQuest = quest.questNum
      const questId = quest.id
      const matchingOption = matchOption(questId)
      if(quest.id === matchingOption.optionId) {
        matching = matchingOption
      }
      console.log(matching)
      console.log(quest)

      const selected = document.querySelector(`input[name="radio-${quest.id}"]:checked`)
      console.log(selected)

      if(selected) {
        attempted++
        const answer = selected.value;
        /*
        if(answer.includes(quest.ans)){
          totalAns++
        }
        */
        if(answer === quest.ans) {
          totalAns++
        }
      }
    })
    console.log(totalQuest)
    const percentScore = ((totalAns / totalQuest) * 100).toFixed(2)
    const comment = percentScore < 50 ? 'Your Performance is low' : 'You Performed Brilliantly'
    const attemptQuest = attempted > 1 ? 'Questions' : 'Question'

    endQuizHTML = `
      <div class="end-quiz js-end-quiz">
        <div class="view-take">
          <button class="view-take-close js-view">View Correction</button>
          <button class="view-take-close js-take">Retake the test</button>
        </div>
        <div class="attempted">You Attempted ${attempted} ${attemptQuest}</div>
        <div class="end-message">You scored ${totalAns} out of ${totalQuest}</div>
        <div class="comment">${percentScore}%, ${comment}</div>
        <div class="keep-it-up">Keep it up</div>
        <button class="view-take-close js-close-back">Close and Back to Menu</button>
      </div>
    `
    document.querySelector('.end-quiz-container').style.display = 'flex'
    document.querySelector('.end-quiz-container').innerHTML = endQuizHTML;

    document.querySelector('.js-take').addEventListener('click', () => {
      window.location.href = 'exam.html'
    })
    document.querySelector('.js-close-back').addEventListener('click', () => {
      window.location.href = 'unilag.html'
    })
  }

  document.addEventListener("change", (e) => {
    console.log(e);
    if (e.target && e.target.classList.contains("radio")) {
      const selectedRadio = e.target;

      const selectedValue = selectedRadio.value;
      console.log(selectedValue);
      const nameAttr = selectedRadio.name;
      const idPart = nameAttr.replace("radio-", "");
      console.log(idPart);

      const allRadios = document.getElementsByName(nameAttr);
      console.log(allRadios);
      allRadios.forEach((radio) => {
        if (radio !== selectedRadio) {
          radio.checked = false;
        }
      });

    
      const allLabels = document.querySelectorAll(`.to-check-${idPart}`);
      allLabels.forEach((label) => {
        label.classList.remove("checked");
        const input = label.querySelector("input");

        if (input && input.value === selectedValue) {
          label.classList.add("checked");
        }
      });
    }
  });
}
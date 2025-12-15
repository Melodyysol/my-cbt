import { generalQuest, mainOption, removeQuestion } from "../data/questions.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
import {  matchOption } from "../data/option.js";
import { questionType } from "../data/questionType.js";
import { questions } from "../data/infomation.js";
import { calculator } from "../data/calculator.js";
import { getRandomPassword } from "../data/choosenQuest.js";
export let track = JSON.parse(localStorage.getItem('track')) || [];


export function renderQuestionHTML() {
  const eachQuestion = document.querySelector('.subject')
  let filterQuestions = questions;
  let varyQuestions = []
  let time = 60;
  let timeMinute = 19
  let viewCorrection;
  let getSelect;
  let select = [];
  let eachQuestNum = 0

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
    for (let i = filterQuestions.length - 1; i > 0; i--) {
      let randomNumber = Math.floor(Math.random() * (i + 1));
      [filterQuestions[i], filterQuestions[randomNumber]] = [filterQuestions[randomNumber], filterQuestions[i]]
      // [filterQuestions[i].questNum, filterQuestions[randomNumber].questNum] = [filterQuestions[randomNumber].questNum, filterQuestions[i].questNum]
      varyQuestions = filterQuestions
    }

    // Collect all unique subjects
    const subjectsMap = new Map();
    const subjectNames = {
      '1': 'English Lang.',
      '2': 'Mathematics',
      '3': 'Gen. Paper'
    };

    varyQuestions.forEach((quest) => {
      const subjectId = quest.selectedQuestId;
      if (!subjectsMap.has(subjectId)) {
        subjectsMap.set(subjectId, subjectNames[subjectId] || subjectId);
      }
    });

    // Build subject display HTML
    let subjectsHTML = '';
    subjectsMap.forEach((name) => {
      subjectsHTML += `<div class="eng">${name}</div>`;
    });

    varyQuestions.forEach((quest) => {
      const questId = quest.id;
      const matchingOption = matchOption(questId)
      let matchingQuestionOption;
      questionType.forEach(question => {
        if(matchingOption.questionTypeId === question.questionTypeId){
          matchingQuestionOption = question;
        }
      })
      eachQuestNum++

      document.querySelector('.js-examine-1').innerHTML = subjectsHTML;
      document.querySelector('.js-examine-1').style.display = 'flex';

      html= `
        <div class="menu2-div">
          <div>
            <div>Questions ${eachQuestNum}</div>
            <div>Time left: <span><span class="js-minute">20</span> : <span class="js-seconds">00</span></span></div>
          </div>
          <div class="submit-div js-submit">Submit</div>
        </div>
        <div class="question-name">
          ${subjectsHTML}
        </div>
      `

      generalQuestHTML += `
        <div class="quest-cont js-quest-cont-${quest.id}">
          <div class="quest-num">Question ${eachQuestNum}</div>
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



      // Placeholder - viewCorrection will be defined after endQuiz
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
    // const date = new Date()
    // const dateString = `${date.getDate()}` + '-' + `${date.getMonth()}` + '-' + `${date.getFullYear()}`
    // const dateTime = `${date.getHours()}` + '-' + `${date.getMinutes()}`

    const today = dayjs()
    const dateString = today.format('d MMMM, YYYY')
    let dateTime = today.format('hh:mmA')
    varyQuestions.forEach(quest => {
      totalQuest = eachQuestNum
      const questId = quest.id
      const matchingOption = matchOption(questId)
      if(quest.id === matchingOption.optionId) {
        matching = matchingOption
      }

      const selected = document.querySelector(`input[name="radio-${quest.id}"]:checked`)
      select.push(selected)
      // getSelect =  function selectFun(selects) {
      //   let selected = document.querySelector(`input[name="radio-${quest.id}"]:checked`)
      //   console.log(selected)
      //   let getSelected
      //   if(selects === selected){
      //     getSelected = selected
      //   }
      //   return getSelected
      // }
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

    track.push({
      id: getRandomPassword(12, false, true, true, false),
      avgScores: totalAns,
      timeSecs: time,
      timeMins: timeMinute,
      percentScores: percentScore,
      selected: select,
      dateString: dateString,
      dateTime: dateTime
    })
    saveToStorage()
    document.querySelector('.end-quiz-container').style.display = 'flex'
    document.querySelector('.end-quiz-container').innerHTML = endQuizHTML;

    document.querySelector('.js-take').addEventListener('click', () => {
      window.location.href = 'exam.html'
    })
    document.querySelector('.js-close-back').addEventListener('click', () => {
      window.location.href = 'index.html'
    })

    document.querySelector('.js-view').addEventListener('click', () => {
      showCorrections(varyQuestions, select)
    })
  }

  // Function to display corrections for all questions
  function showCorrections(questions, userSelections) {
    let correctionsHTML = `
      <div class="corrections-container">
        <div class="menu2-div">
          <div>
            <div>Review Answers</div>
            <div></div>
          </div>
          <a href="index.html"><div class="submit-div js-submit">Back to Home</div></a>
        </div>
        <div class="question-name">
          <div class="eng">Review of your Answers</div>
        </div>
        <div class="corrections-content">
    `;

    questions.forEach((quest, index) => {
      const userSelection = userSelections[index];
      const userAnswer = userSelection ? userSelection.value : 'Not Attempted';
      const isCorrect = userAnswer === quest.ans;
      const matchingOption = matchOption(quest.id);
      
      // Build options display with visual indicators
      let optionsHTML = '';
      const options = ['A', 'B', 'C', 'D'];
      options.forEach(opt => {
        const optionKey = `option${opt}`;
        const optionValue = matchingOption[optionKey] || '';
        let optionClass = '';
        
        if (opt === quest.ans) {
          optionClass = 'correct-answer'; // Correct answer
        }
        if (opt === userAnswer && !isCorrect) {
          optionClass = 'wrong-answer'; // User's wrong answer
        }
        if (opt === userAnswer && isCorrect) {
          optionClass = 'user-correct-answer'; // User's correct answer
        }
        
        optionsHTML += `
          <div class="correction-option ${optionClass}">
            <strong>${opt}:</strong> ${optionValue}
          </div>
        `;
      });

      correctionsHTML += `
        <div class="correction-question ${isCorrect ? 'correct' : 'incorrect'}">
          <div class="correction-header">
            <span class="question-status">${isCorrect ? '✓ Correct' : '✗ Incorrect'}</span>
            <span class="question-title">Question ${index + 1}</span>
          </div>
          
          <div class="correction-body">
            <div class="question-text"><strong>Question:</strong> ${quest.question}</div>
            
            <div class="user-answer">
              <strong>Your Answer:</strong> ${userAnswer} ${userAnswer !== 'Not Attempted' ? `(${matchingOption[`option${userAnswer}`] || ''})` : ''}
            </div>
            
            <div class="correct-answer-section">
              <strong>Correct Answer:</strong> ${quest.ans} (${matchingOption[`option${quest.ans}`] || ''})
            </div>
            
            <div class="options-list">
              <strong>All Options:</strong>
              ${optionsHTML}
            </div>
            
            ${quest.correction ? `
              <div class="explanation">
                <strong>Explanation:</strong>
                <p>${quest.correction}</p>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    });

    correctionsHTML += `
        </div>
      </div>
    `;

    // Display corrections
    document.querySelector('.js-submit-subject').innerHTML = '';
    eachQuestion.innerHTML = correctionsHTML;
    document.querySelector('.end-quiz-container').style.display = 'none';

    // Add navigation
    document.querySelector('.js-submit').addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }

  document.addEventListener("change", (e) => {
    // console.log(e);
    if (e.target && e.target.classList.contains("radio")) {
      const selectedRadio = e.target;

      const selectedValue = selectedRadio.value;
      // console.log(selectedValue);
      const nameAttr = selectedRadio.name;
      const idPart = nameAttr.replace("radio-", "");
      // console.log(idPart);

      const allRadios = document.getElementsByName(nameAttr);
      // console.log(allRadios);
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

  function saveToStorage() {
    return localStorage.setItem('track', JSON.stringify(track))
  }
  document.querySelector('.js-calculator').addEventListener('click', () => {
    document.querySelector('.calculator-container-real').style.display = 'flex';
    calculator()
  })
}
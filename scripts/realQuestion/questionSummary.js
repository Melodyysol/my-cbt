import { generalQuest, mainOption, removeQuestion } from "../data/questions.js";
import {  matchOption } from "../data/option.js";
import { questionType } from "../data/questionType.js";


export function renderQuestionHTML() {
  const eachQuestion = document.querySelector('.subject') 
  function mainQuestion() {
    let html = '';
    let generalQuestHTML = '';
    generalQuest.forEach((quest) => {
      const questId = quest.id;
      const matchingOption = matchOption(questId)
      let matchingQuestionOption;
      questionType.forEach(question => {
        if(matchingOption.questionTypeId === question.questionTypeId){
          matchingQuestionOption = question;
        }
      })
      document.querySelector('.js-examine').innerHTML = matchingQuestionOption.name

      html= `
        <div class="menu2-div">
          <div>
            <div>Question ${quest.questNum}</div>
            <div>No of time set</div>
          </div>
          <div class="submit-div">Submit</div>
        </div>
        <div class="eng">${matchingQuestionOption.name}</div>
      `

      generalQuestHTML += `
      <div class="quest-cont js-quest-cont-${questId}">
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
}
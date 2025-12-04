import { matchSubject, questionType } from "./data/questionType.js";
function subjectOption() {

  let subjectHtml = ''
  let the;
  questionType.forEach((subject) => {
    the = subject
    const isChecked = subject.questionTypeId === '1' ? 'checked' : '' ;
    const isRequired = subject.questionTypeId === '1' ? 'required' : '' ;
    subjectHtml += `
      <label for="nput-${subject.questionTypeId}" class="container2 js-container2" data-question-id="${subject.questionTypeId}">
        <button class="button1">${subject.abbre}</button>
        <div>${subject.name}</div>
        <input id="input-${subject.questionTypeId}" type="checkbox" ${isRequired} ${isChecked}
           class="input1 js-input-${subject.questionTypeId}">
      </label>
      <div class="js-condition-${subject.questionTypeId} js-condition" data-question-id="${subject.questionTypeId}"></div>
    `
})

  document.querySelector('.js-subject-container').innerHTML = subjectHtml
}

subjectOption()

document.querySelectorAll('.js-condition').forEach(condition => {
  const questionId = condition.dataset.questionId
  const matchingSubject = matchSubject(questionId)
  

  if(matchingSubject.questionTypeId === '1') {
    condition.innerHTML = `
      <div class="condition">English language is compulsory according to Post UTME <br>
       exam. Pls click the boxes!
      </div>
    `
  }
})

let questionsId1;
let questionsId2;
let questionsId3;
document.querySelectorAll('.js-container2').forEach(quest => {
  quest.addEventListener('click', () => {
    const questionId = quest.dataset.questionId;
    const eachInput = document.querySelector(`.js-input-${questionId}`);
    if(eachInput.checked === true && questionId === '1') {
      questionsId1 = questionId
    }else if(eachInput.checked === false && questionId === '1') {
      questionsId1 = undefined
    }else if(eachInput.checked === true && questionId === '2') {
      questionsId2 = questionId
    }else if(eachInput.checked === false && questionId === '2') {
      questionsId2 = undefined
    }else if(eachInput.checked === true && questionId === '3') {
      questionsId3 = questionId
    }else if(eachInput.checked === false && questionId === '3') {
      questionsId3 = undefined
    }

    console.log(questionsId1)
    console.log(questionsId2)
    console.log(questionsId3)
  })
})

document.querySelector('.js-proceed-button')
  .addEventListener('click', () => {
    const url = new URL(window.location.href)
    const search = url.searchParams.get('toPractice')
    if(search){
      window.location.href = `saved-question.html`
    }else{
    window.location.href = `past-quest-opt.html?questionId1=${questionsId1}&questionId2=${questionsId2}&questionId3=${questionsId3}`
    }
  })


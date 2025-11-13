import { matchSubject, questionType } from "./data/questionType.js";

function subjectOption() {

  let subjectHtml = ''
  questionType.forEach((subject) => {
  const isChecked = subject.questionTypeId === '1' ? 'checked' : '' ;
  const isRequired = subject.questionTypeId === '1' ? 'required' : '' ;
  subjectHtml += `
    <label for="input-${subject.questionTypeId}" class="container2">
      <button class="button1">${subject.abbre}</button>
      <div>${subject.name}</div>
      <input id="input-${subject.questionTypeId}" type="checkbox" ${isRequired} ${isChecked} class="input1">
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
       exam
      </div>
    `
  }
})


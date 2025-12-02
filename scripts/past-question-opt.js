import { questionType } from "./data/questionType.js";
export let question = []

const url = new URL(window.location.href)
const questionId1 = url.searchParams.get('questionId1')
const questionId2 = url.searchParams.get('questionId2')
const questionId3 = url.searchParams.get('questionId3')
console.log(questionId1)
console.log(questionId2)
console.log(questionId3)

let matchingSubject1;
let matchingSubject2;
let matchingSubject3;
questionType.forEach(question => {
  if(question.questionTypeId === questionId1) {
    matchingSubject1 = question
  }else if(question.questionTypeId === questionId2) {
    matchingSubject2 = question
  }else if(question.questionTypeId === questionId3) {
    matchingSubject3 = question
  }
})

const checkDefine1 = matchingSubject1 === undefined ? 'English Language' : matchingSubject1.name
const checkDefine2 = matchingSubject2 === undefined ? '' : matchingSubject2.name
const checkDefine3 = matchingSubject3 === undefined ? '' : matchingSubject3.name

question.push(questionId1, questionId2, questionId3)
let questionOptHTML = ''
questionOptHTML = `
  <div class="top-section">
    <a href="index.html" class="arrow"></a>
    <div class="examine">Past Question Options</div>
    <div class="select1">Select the options below to continue</div>
  </div>
  <div class="eng-lang">
    <div>${checkDefine1}</div>
    <div>${checkDefine2}</div>
    <div>${checkDefine3}</div>
  </div>
  <div>
  <div class="year-opt">
    <div>Year</div>
    <select name="" id="">
      <option value="2021">2021</option>
      <option value="2020">2020</option>
      <option value="2019">2019</option>
      <option value="2018">2018</option>
      <option value="2017">2017</option>
      <option value="2016">2016</option>
      <option value="2015">2015</option>
      <option value="2014">2014</option>
      <option value="2013">2013</option>
      <option value="2012">2012</option>
      <option value="2011">2011</option>
      <option value="2010">2010</option>
      <option value="2009">2009</option>
      <option value="2008">2008</option>
      <option value="2007">2007</option>
    </select>
  </div>
  <div class="year-opt">
    <div>No of Questions</div>
    <select name="" id="">
      <option value="">1</option>
      <option value="">2</option>
      <option value="">3</option>
      <option value="">4</option>
      <option value="">5</option>
      <option value="">6</option>
      <option value="">7</option>
      <option value="">8</option>
      <option value="">9</option>
      <option value="">10</option>
      <option value="">11</option>
      <option value="">12</option>
      <option value="">13</option>
      <option value="">14</option>
      <option value="">15</option>
      <option value="">16</option>
      <option value="">17</option>
      <option value="">18</option>
      <option value="">19</option>
      <option value="">20</option>
      <option value="">21</option>
      <option value="">22</option>
      <option value="">23</option>
      <option value="">24</option>
      <option value="">25</option>
    </select>
  </div>
  <div class="shuffle">
    <div class="check-shuf">
      <input  class="checked"  type="checkbox">
      <span>Shuffle Question</span>
    </div>
    <div class="check-shuf">
      <input class="checked" type="checkbox">
      <span>Shuffle Options</span>
    </div>
  </div>
  </div>
  <div class="proceed js-start-exam">Start Study</div>
`

document.querySelector('.js-container3').innerHTML = questionOptHTML

document.querySelector('.js-start-exam')
  .addEventListener('click',() => {
    window.location.href = `realQuestion.html?questionId1=${questionId1}&questionId2=${questionId2}&questionId3=${questionId3}`
  })
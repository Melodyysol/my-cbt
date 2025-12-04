import { questions } from "./infomation.js";


let filterQuestions = questions;
filterQuestions = questions.filter(quest => {
  let mat;
  if(quest.selectedQuestId === '1') {
    mat = quest
  }

  return mat
})
console.log(filterQuestions)

let time = 60;
setInterval(() => {
  if(time <= 60 && time > 0) {
    time--
  }else if(time <= 0){
    time = 59
  }
}, 1000)

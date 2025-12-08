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
 let varyQuestions = []

for (let i = 0; i < filterQuestions.length; i++) {
  let randomNumber = Math.floor(Math.random() * filterQuestions.length + 1);
  varyQuestions.push(filterQuestions[randomNumber])
}
console.log(varyQuestions)
varyQuestions.forEach(quest => {
  
})



let time = 60;
setInterval(() => {
  if(time <= 60 && time > 0) {
    time--
  }else if(time <= 0){
    time = 59
  }
}, 1000)

document.querySelector('.js-target').addEventListener('click', () => {
  document.querySelector('.js-button').classList.add('checked')
})
/*
let isCorrect = true
let randomNumber = Math.floor(Math.random() * 6 + 1)
let attempt = 1
console.log(randomNumber)
while (isCorrect) {
  let guess = window.prompt('Guess a number btw 1 and 6')
  guess = Number(guess)
  if(guess === randomNumber) {
    console.log('You lucky Correct!')
    isCorrect = false
  }else{
    console.log('Try again')
    attempt++
  }
}
console.log(`You attemted it ${attempt} times`)
*/


function getRandomPassword(length, isLowerCase, isUpperCase, isNumber, isSpecialSymbol) {
  const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789'
  const specialSymbols = '!@#$%^&*()_+';

  let allowChars = ''
  let password = ''

  allowChars += isLowerCase ? lowerCaseChars : ''
  allowChars += isUpperCase ? upperCaseChars : ''
  allowChars += isNumber ? numberChars : ''
  allowChars += isSpecialSymbol ? specialSymbols : ''
  
  for (let i = 0; i < length; i++) {
    let randomIdex = Math.floor(Math.random() * allowChars.length + 1)
    password += allowChars[randomIdex]
  }
  console.log(password)
}
let passwordLength = 12
let isLowerCase = true;
let isUpperCase = true;
let isNumber = true;
let isSpecialSymbol = true;
getRandomPassword(passwordLength, isLowerCase, isUpperCase, isNumber, isSpecialSymbol)


let pa = [1,2,3,4,5,85,5,7,6]


let ra = pa.reduce(max)
function max (pre, next) {
  return Math.max(pre, next)
}
console.log(ra)

class Circle{
  static PI = 22/7
  constructor(radius) {
    this.radius = radius
  }
  area() {
    return Circle.PI * this.radius * this.radius
  }

  set radius(newRadius) {
    if(newRadius > 0) {
      return this._radius = newRadius
    }else{
      console.log('radius must be positive')
    }
  }
  get radius() {
    return this._radius
  }
  get perimeter () {
    return (2 * Circle.PI * this._radius)
  }
}

const circle = new Circle(7)

console.log(circle.perimeter)
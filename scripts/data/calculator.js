export function calculator() {
  const numbers = [['AC', '(', ')', 'Del'],
                  [7, 8, 9, '÷'],
                  [4, 5, 6, '*'],
                  [1, 2, 3, '-'],
                  [0, '.', '=', '+']]
  function letGo() {
    let options = ''
    for (let i = 0; i < numbers.length; i++) {
      const element = numbers[i]
      for (let j = 0; j < element.length; j++) {
        const element2 = element[j];
        options +=`
          <button class="all-signs js-signs">${element2}</button>
        `
      }
    }
    return options;
  }
  letGo()
  let calculatorHTML = `
    <div class="calculator-container">
      <div class="calculator-input">
        <input type="text" class="js-input"  placeholder="Calculate easily" readonly>
      </div>
      <div class="calculator-signs">
      ${letGo()}
      </div>
    </div>
    <div class="cancle">X</div>
  `;


  document.querySelector('.calculator-container-real').innerHTML = calculatorHTML;
  let addSigns = ''


  document.querySelectorAll('.js-signs').forEach(sign => {
    sign.addEventListener('click', () => {
      try {
        if(sign.innerHTML === '=') {
          if(document.querySelector('.js-input').value !== '') {
            let cal = eval(addSigns)
            document.querySelector('.js-input').value = cal
            addSigns = cal
          }
        }
        else if(sign.innerHTML === 'Del'){
          addSigns = addSigns.toString()
          let lastIndex = addSigns.at(-1)
          let newSigns = addSigns.replace(lastIndex,'')
          addSigns = newSigns
          document.querySelector('.js-input').value = addSigns;
        }else if(sign.innerHTML === 'AC') {
          addSigns = ''
          document.querySelector('.js-input').value = addSigns;
        }else if(sign.innerHTML === '÷') {
          numbers[1][4] = '/'
          addSigns += `${numbers[1][4]}`
          document.querySelector('.js-input').value = addSigns;
        }
        // else if(sign.innerHTML === 1 || sign.innerHTML === 2 ||
        //         sign.innerHTML === 3 || sign.innerHTML === 5||
        //         sign.innerHTML === 4 || sign.innerHTML === 6||
        //         sign.innerHTML === 7 || sign.innerHTML === 8||
        //         sign.innerHTML === 9 || sign.innerHTML === 0
        // ){
        //   sign.innerHTML = Number(sign.innerHTML)
        // }
        else{
          addSigns += `${sign.innerHTML}`
          document.querySelector('.js-input').value = addSigns;
        }
      } catch (error) {
        document.querySelector('.js-input').value = 'Math Error';
      }
    })
  })
      document.querySelector('.cancle').addEventListener('click', () => {
        document.querySelector('.calculator-container-real').style.display = 'none'
      })
}
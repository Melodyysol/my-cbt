  
  
  const subjects = document.querySelector('.subject')

  const eachSubject = [{
    id: '1001-abc-0001',
    firstLetter: 'E',
    name: 'English Language'
  },{
    id: '1001-abc-0002',
    firstLetter: 'M',
    name: 'Mathematics'
  },{
    id: '1001-abc-0003',
    firstLetter: 'G',
    name: 'General Paper'
  }]
  let subjectHTML = ''

  eachSubject.forEach(subj => {
    subjectHTML += `
      <label class="container2" for="input${subj.id}">
        <button class="button1 button${subj.id}">${subj.firstLetter}</button>
        <div>${subj.name}</div>
        <input id="input${subj.id}" type="checkbox" class="input1 input${subj.id}">
      </label>
    `
  })

  subjects.innerHTML = subjectHTML;

  export const questionType = [{
    questionTypeId: '1',
    name: 'English Language',
    abbre: 'E'
  },{
    questionTypeId: '2',
    name: 'Mathematics',
    abbre: 'M'
  },{
    questionTypeId: '3',
    name: 'General Paper',
    abbre: 'G'
  }]

  export function matchSubject(questionId) {
    let matchingSubject;
    questionType.forEach(subject => {
      if(questionId === subject.questionTypeId){
        matchingSubject = subject;
      };
    })
    return matchingSubject;
  }
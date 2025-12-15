import { matchSubject, questionType } from "./questionType.js";
let questNum = 0;

export let engQuest = [
  {
    id: "1000-abc-0001",
    questNum: ``,
    question: `Choose the option that best complete the gap. 
      The African extended family system gives security 
      to ....... members.`,
    ans: "C",
    correction: `The African extended family system gives security to its members.`,
  },
  {
    id: "1000-abc-0002",
    questNum: ``,
    question: `Choose the option that best complete the gap. 
      The new secretary is always ........... dressed.`,
    ans: "B",
    correction: `"Gaily" is the correct adverb meaning "in a bright or cheerful manner." Example: She was always gaily dressed in colorful outfits.`,
  },
  {
    id: "1000-abc-0003",
    questNum: ``,
    question: `Choose the option that is nearest in meaning to capitalized word: We visited the most EXOTIC place in Abuja.`,
    ans: "A",
    correction: `Correct answer: A — 'exotic' means unusual or striking.`,
  },
  {
    id: "1000-abc-0004",
    questNum: ``,
    question: `Choose the option that which indicates the grammatical name of the sentence: Where on the earth have you been hiding?`,
    ans: "D",
    correction: `This type of sentence asks a question and ends with a question mark '?'`,
  },
  {
    id: "1000-abc-0005",
    questNum: ``,
    question: `Choose the option that which is similar, or almost similar to the word in italics in the context of their usage. Good deeds are <i>eternal</i>.`,
    ans: "A",
    correction: `Correct answer: A — 'eternal' means lasting forever.`,
  },
  {
    id: "1000-abc-0006",
    questNum: ``,
    question: `Choose the option that which indicates the word class of the capitalized word in the context of the sentence: The girl proceeded to paint the town RED`,
    ans: "A",
    correction: `Correct answer: A — 'RED' functions as an adjective here.`,
  },
  {
    id: "1000-abc-0007",
    questNum: ``,
    question: `Choose the option that which has the same sound as the underlined in b<u>u</u>yer`,
    ans: "A",
    correction: `Correct answer: A — 'buyer' contains the vowel sound /aɪ/.`,
  },
  {
    id: "1000-abc-0008",
    questNum: ``,
    question: `Regarding the election Tope desired to keep his cards close to his chest`,
    ans: "A",
    correction: `Correct answer: A — to keep one's cards close to one's chest means to be secretive.`,
  },
  {
    id: "1000-abc-0009",
    questNum: ``,
    question: `Choose the option which provides the meaning, or nearest in meaning to the underlined word: The second defendant was acquitted in the court today.`,
    ans: "A",
    correction: `Correct answer: A — 'acquitted' means found not guilty.`,
  },
  {
    id: "1000-abc-00010",
    questNum: ``,
    question: `Choose the option which is nearest in meaning to the capitalized word: The clerk turn out to be quite UNINTELLIGENT.`,
    ans: "A",
    correction: `Correct answer: A — 'unintelligent' means not intelligent.`,
  },
  {
    id: "1000-abc-00011",
    questNum: ``,
    question: `She called the manager ......... the contract agreement`,
    ans: "D",
    correction: `Correct answer: D.`,
  },
  {
    id: "1000-abc-00012",
    questNum: ``,
    question: `Choose the option which has the same sound as the underlined in p<u>a</u>in`,
    ans: "D",
    correction: `Correct answer: D.`,
  },
  {
    id: "1000-abc-00013",
    questNum: ``,
    question: `My friend was proved innocent ...... the charges.`,
    ans: "D",
    correction: `Correct answer: D — 'innocent of the charges' is the correct phrase.`,
  },
  {
    id: "1000-abc-00014",
    questNum: ``,
    question: `Select the option which illustrate the grammatical function of the underlined portion: I need to speak with the pastor <u>before the service commences</u>`,
    ans: "D",
    correction: `Correct answer: D — the underlined phrase functions as an adverbial time expression.`,
  },
  {
    id: "1000-abc-00015",
    questNum: ``,
    question: `Choose the option that is nearest in meaning to capitalized word: The musician impressed us even thought he was relatively UNKNOWN.`,
    ans: "A",
    correction: `Correct answer: A.`,
  },
  {
    id: "1000-abc-00016",
    questNum: ``,
    question: `Jide and Olu ....... my house today.`,
    ans: "A",
    correction: `Correct answer: A.`,
  },
  {
    id: "1000-abc-00017",
    questNum: ``,
    question: `Choose the option which has the same vowel sound as: Burn.`,
    ans: "A",
    correction: `Correct answer: A.`,
  },
];

export let mathQuest = [
  {
    id: "1002-abc-0001",
    questNum: ``,
    question: `If X, Y, Z share N540.00 so that the ratio X's share to Y's share is 2:5 and that of Y's share to Z's share is 1:4, how much is Y's share?`,
    ans: "B",
    correction: `X:Y = 2:5 and Y:Z = 1:4. Scale Y:Z by 5 → 5:20. So X:Y:Z = 2:5:20 → total = 27. Y = 5/27 × 540 = 100.`,
  },
  {
    id: "1002-abc-0002",
    questNum: ``,
    question: `In how many ways can the letters of the word "JUDGE" be arrange such that the vowels will always come together?`,
    ans: "A",
    correction: `Treat vowels (U,E) as one block → items = 4 → 4! = 24. Vowels inside block: 2! = 2. Total = 24 × 2 = 48.`,
  },
  {
    id: "1002-abc-0003",
    questNum: ``,
    question: `There are eight men and nine women in a committee. In how many ways can a subcommittee of two men and three women be choosen?`,
    ans: "D",
    correction: `C(8,2) × C(9,3) = 28 × 84 = 2352.`,
  },
  {
    id: "1002-abc-0004",
    questNum: ``,
    question: `The product gradients of two perpendicular lines is always`,
    ans: "B",
    correction: `If slopes are m1 and m2, then m1 × m2 = -1.`,
  },
  {
    id: "1002-abc-0005",
    questNum: ``,
    question: `If 220 out of 500 voters surveyed said that they would vote for the incumbent, then how many votes could the incumbent expect out of the 400,000 voters in the state`,
    ans: "A",
    correction: `220/500 = 0.44 → 0.44 × 400000 = 176000 votes.`,
  },
  {
    id: "1002-abc-0006",
    questNum: ``,
    question: `300% of 20 = `,
    ans: "A",
    correction: `300% = 3 × 20 = 60.`,
  },
  {
    id: "1002-abc-0007",
    questNum: ``,
    question: `In how ways can a group of five men and two women be made out of a total of seven men and three women.`,
    ans: "D",
    correction: `C(7,5) × C(3,2) = 21 × 3 = 63.`,
  },
  {
    id: "1002-abc-0008",
    questNum: ``,
    question: `A chord of length 30cm is 8cm away from the centre of the circle. What is the radius of the circle?`,
    ans: "B",
    correction: `Half chord = 15. r = sqrt(8^2 + 15^2) = sqrt(64+225) = sqrt(289) = 17 cm.`,
  },
  {
    id: "1002-abc-0009",
    questNum: ``,
    question: `Increase 5 by 44%`,
    ans: "D",
    correction: `5 × 1.44 = 7.2.`,
  },
  {
    id: "1002-abc-00010",
    questNum: ``,
    question: `If the arithmetic mean of a, b, c is 6 and the mean of a, b, c, d is 5. Find the value of d`,
    ans: "C",
    correction: `a+b+c = 3 × 6 = 18. Total a+b+c+d = 4 × 5 = 20. So d = 20 − 18 = 2.`,
  },
  {
    id: "1002-abc-00011",
    questNum: ``,
    question: `Twelve less than four times a number is 20. What is the number?`,
    ans: "C",
    correction: `4x − 12 = 20 → 4x = 32 → x = 8.`,
  },
  {
    id: "1002-abc-00012",
    questNum: ``,
    question: `A class enrollment of 30 students was increased by 20% what is the new class size?`,
    ans: "C",
    correction: `30 × 1.20 = 36 students.`,
  },
  {
    id: "1002-abc-00013",
    questNum: ``,
    question: `To two decimal place evaluate 4.5 divided by 20.5`,
    ans: "D",
    correction: `4.5 / 20.5 ≈ 0.219512 → to 2 d.p. = 0.22.`,
  },
  {
    id: "1002-abc-00015",
    questNum: ``,
    question: `In a regular polygon of n sides, each interior angle is 144<sup>0</sup>. Find n.`,
    ans: "D",
    correction: `(n−2)×180 / n = 144 → 180n − 360 = 144n → 36n = 360 → n = 10.`,
  },
];

export let generalQuest;
GeneralQuestion();
export function GeneralQuestion() {
  generalQuest = JSON.parse(localStorage.getItem('generalQuest'));

  if (!generalQuest) {
    generalQuest = [
      {
        id: "1001-abc-0001",
        questNum: ``,
        question: `The following are former Governor of Center Bank of Nigeria except`,
        ans: "D",
        correction: `Kingsley Moghalu - He was a Deputy Governor of Centre Bank of Nigeria but never serve as the Governor`,
      },
      {
        id: "1001-abc-0002",
        questNum: ``,
        question: `The South-South Geo-Political Zone in Nigeria is made up of ......... states in Nigeria`,
        ans: "B",
        correction: `According to the information available the South-South Geo-Political Zone in Nigeria is made up of Six (6) states`,
      },
    ];
  }

  engQuest.forEach((quest) => {
    questNum = Number(questNum) + 1;
    quest.questNum = questNum;
  });
  questNum = "";

  mathQuest.forEach((quest) => {
    questNum = Number(questNum) + 1;
    quest.questNum = questNum;
  });
  questNum = "";

  generalQuest.forEach((quest) => {
    questNum = Number(questNum) + 1;
    quest.questNum = questNum;
  });
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('generalQuest', JSON.stringify(generalQuest));
}

saveToStorage();

export function removeQuestion(questId) {
  let newQuest = [];
  generalQuest.forEach((quest) => {
    if (quest.id !== questId) newQuest.push(quest);
  });
  generalQuest = newQuest;
  saveToStorage();
}

export function bookmarkQuestion(questId, matchingQuest) {
  let matching;
  generalQuest.forEach((quest) => {
    if (questId === quest.id) matching = quest;
  });
  if (!matching) {
    generalQuest.push({
      id: questId,
      questNum: matchingQuest.questNum,
      question: matchingQuest.question,
      ans: matchingQuest.ans,
      correction: matchingQuest.correction,
    });
  }
  saveToStorage();
}

export function mainOption(matchingOption) {
  let optionHTML = '';
  questionType.forEach((quest) => {
    optionHTML = `
      <label for="radio-${matchingOption.optionId}-A" class="to-check to-check-${matchingOption.optionId}">
        <input type="radio" id="radio-${matchingOption.optionId}-A" class="radio radio-${matchingOption.optionId}" name="radio-${matchingOption.optionId}" value="A">
        <div class="real-opts" data-check-id="radio-${matchingOption.optionId}-A">${matchingOption.optionA}</div>
      </label>
      <label for="radio-${matchingOption.optionId}-B" class="to-check to-check-${matchingOption.optionId}">
        <input type="radio" id="radio-${matchingOption.optionId}-B" class="radio radio-${matchingOption.optionId}" name="radio-${matchingOption.optionId}" value="B">
        <div class="real-opts" data-check-id="radio-${matchingOption.optionId}-B">${matchingOption.optionB}</div>
      </label>
      <label for="radio-${matchingOption.optionId}-C" class="to-check to-check-${matchingOption.optionId}">
        <input type="radio" id="radio-${matchingOption.optionId}-C" class="radio radio-${matchingOption.optionId}" name="radio-${matchingOption.optionId}" value="C">
        <div class="real-opts" data-check-id="radio-${matchingOption.optionId}-C">${matchingOption.optionC}</div>
      </label>
      <label for="radio-${matchingOption.optionId}-D" class="to-check to-check-${matchingOption.optionId}">
        <input type="radio" id="radio-${matchingOption.optionId}-D" class="radio radio-${matchingOption.optionId}" name="radio-${matchingOption.optionId}" value="D">
        <div class="real-opts" data-check-id="radio-${matchingOption.optionId}-D">${matchingOption.optionD}</div>
      </label>
    `;
  });
  return optionHTML;
}

  import { engQuest, mathQuest, generalQuest } from "./questions.js";
  import { options } from "./option.js";
  const eachQuestion = document.querySelector('.subject')
  let engQuestHTML = ''
  generalQuest.forEach((quest) => {
    const questId = quest.id;
    let matchingQuest;

    options.forEach((option) => {
      if (option.id === questId) {
        matchingQuest = option;
      }
    });
    engQuestHTML += `
    <div class="quest-cont">
    <div class="quest-num">Question ${quest.questNum}</div>
    <div class="instruction">
      ${quest.question}
    </div>
    <div class="opts">
      <label for="radio-${matchingQuest.id}-A"   class="to-check to-check-${matchingQuest.id}"
        data-checked-id="${matchingQuest.id}" data-value="A"
      >
        <input type="radio" id="radio-${matchingQuest.id}-A" class="radio radio-${matchingQuest.id}"
         name="radio-${matchingQuest.id}" value="A">
        <div class="real-opts"  data-check-id="radio-${matchingQuest.id}-A">
         ${matchingQuest.optionA}
        </div>
      </label>
      <label for="radio-${matchingQuest.id}-B"   class="to-check to-check-${matchingQuest.id}"
        data-checked-id="${matchingQuest.id}" data-value="B"
      >
        <input type="radio" id="radio-${matchingQuest.id}-B" class="radio radio-${matchingQuest.id}"
         name="radio-${matchingQuest.id}" value="B">
        <div class="real-opts"  data-check-id="radio-${matchingQuest.id}-B">
         ${matchingQuest.optionB}
        </div>
      </label>
      <label for="radio-${matchingQuest.id}-C"   class="to-check to-check-${matchingQuest.id}"
       data-checked-id="${matchingQuest.id}" data-value="C"
      >
        <input type="radio" id="radio-${matchingQuest.id}-C" class="radio radio-${matchingQuest.id}"
         name="radio-${matchingQuest.id}" value="C">
        <div class="real-opts"  data-check-id="radio-${matchingQuest.id}-C">
         ${matchingQuest.optionC}
        </div>
      </label>
      <label for="radio-${matchingQuest.id}-D"   class="to-check to-check-${matchingQuest.id}"
        data-checked-id="${matchingQuest.id}" data-value="D"
        >
        <input type="radio" id="radio-${matchingQuest.id}-D" class="radio radio-${matchingQuest.id}" 
         name="radio-${matchingQuest.id}" value="D">
        <div class="real-opts" data-check-id="radio-${matchingQuest.id}-D">
         ${matchingQuest.optionD}
        </div>
      </label>
    </div>
    <div class="subj-del">
      <div class="eng-small">(english language - 2021)</div>
      <div class="delete-icon">Delete</div>
    </div>
  </div>
    `;
  });

  document.addEventListener("change", (e) => {
    console.log(e);
    if (e.target && e.target.classList.contains("radio")) {
      const selectedRadio = e.target;

      const selectedValue = selectedRadio.value;
      console.log(selectedValue);
      const nameAttr = selectedRadio.name;
      const idPart = nameAttr.replace("radio-", "");
      console.log(idPart);

      const allRadios = document.getElementsByName(nameAttr);
      console.log(allRadios);
      allRadios.forEach((radio) => {
        if (radio !== selectedRadio) {
          radio.checked = false;
        }
      });

    
      const allLabels = document.querySelectorAll(`.to-check-${idPart}`);
      allLabels.forEach((label) => {
        label.classList.remove("checked");
        const input = label.querySelector("input");

        if (input && input.value === selectedValue) {
          label.classList.add("checked");
        }
      });
    }
  });

  eachQuestion.innerHTML = engQuestHTML
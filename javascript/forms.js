console.clear();

const form = document.querySelector('[data-js="question-creator"]');
const questionInput = document.querySelector('[data-js="question-field"]');
const answerInput = document.querySelector('[data-js="answer-field"]');
const characterDisplayQuestion = document.querySelector(
  '[data-js="remaining-characters-question"]');
  const characterDisplayAnswer = document.querySelector(
    '[data-js="remaining-characters-answer"]');

    questionInput.addEventListener("input", (event) => {
        const currentCharacterCount = event.target.value.length;
        characterDisplayQuestion.textContent = 150 - currentCharacterCount;
      });    

    answerInput.addEventListener("input", (event) => {
        const currentCharacterCount = event.target.value.length;
        characterDisplayAnswer.textContent = 150 - currentCharacterCount;
      });   
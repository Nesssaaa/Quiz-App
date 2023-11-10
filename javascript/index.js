const showAnswerButton = document.querySelector('[data-js="showButton"]')
const hideAnswerButton = document.querySelector('[data-js="hideButton"]')
const showTheAnswer = document.querySelector('[data-js="rightAnswer"]')

showAnswerButton.addEventListener("click", () => {
    showAnswerButton.classList.remove("btn-show");
    showAnswerButton.classList.add("btn-show-none");
    hideAnswerButton.classList.remove("btn-hide-answer");
    hideAnswerButton.classList.add("btn-hide-answer-none")
    showTheAnswer.classList.remove("right-answer")
    console.log("Answer");
  });

  hideAnswerButton.addEventListener("click", () => {
    showAnswerButton.classList.add("btn-show");
    showAnswerButton.classList.remove("btn-show-none");
    hideAnswerButton.classList.add("btn-hide-answer");
    hideAnswerButton.classList.remove("btn-hide-answer-none")
    showTheAnswer.classList.add("right-answer")
    console.log("Hide Answer");
  });
  
  
  
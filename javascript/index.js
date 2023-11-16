//Question-Card

const showAnswerButton = document.querySelector('[data-js="showButton"]')
const hideAnswerButton = document.querySelector('[data-js="hideButton"]')
const showTheAnswer = document.querySelector('[data-js="rightAnswer"]')

showAnswerButton.addEventListener("click", () => {
    showAnswerButton.classList.toggle("hidden");
    hideAnswerButton.classList.toggle("hidden");
    showTheAnswer.classList.toggle("hidden")
   
  });

  hideAnswerButton.addEventListener("click", () => {
    showAnswerButton.classList.toggle("hidden");
    hideAnswerButton.classList.toggle("hidden");
    showTheAnswer.classList.toggle("hidden")
  });
  
  //Bookmark color change

  const activeBookmark = document.querySelector('[data-js="activeBookmark"]')
  const inactiveBookmark = document.querySelector('[data-js="inactiveBookmark"]')
  const clickBookmarkButton = document.querySelector('[data-js="bookmarkButton"]')

  clickBookmarkButton.addEventListener("click", () => {
    activeBookmark.classList.toggle("hidden");
    inactiveBookmark.classList.toggle("hidden");
  })
  
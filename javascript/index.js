//Question-Card-Answer and Answer-Button

const showAnswerButton = document.querySelector('[data-js="showButton"]')
const hideAnswerButton = document.querySelector('[data-js="hideButton"]')
const showTheAnswer = document.querySelector('[data-js="rightAnswer"]')
const output = document.querySelector('[data-js="showAnswer"]')



  showAnswerButton.addEventListener("click", () => {
    if (output.innerHTML == "Show Answer") {
    output.innerHTML= "Hide Answer";
    showTheAnswer.classList.remove("hidden");
  }
  else{
    output.innerHTML="Show Answer";
    showTheAnswer.classList.add("hidden");
   
  }
});

  
  //Bookmark color change

  const activeBookmark = document.querySelector('[data-js="activeBookmark"]')
  const inactiveBookmark = document.querySelector('[data-js="inactiveBookmark"]')
  const clickBookmarkButton = document.querySelector('[data-js="bookmarkButton"]')

  clickBookmarkButton.addEventListener("click", () => {
    activeBookmark.classList.toggle("hidden");
    inactiveBookmark.classList.toggle("hidden");
  })
  
//Question-Card-Answer and Answer-Button

const showAnswerButton = document.querySelector('[data-js="showButton"]')
const hideAnswerButton = document.querySelector('[data-js="hideButton"]')
const showTheAnswer = document.querySelector('[data-js="rightAnswer"]')
const output = document.querySelector('[data-js="showAnswer"]')



  showAnswerButton.addEventListener("click", () => {
    if (output.innerHTML == "Show Answer") {
    output.innerHTML= "Hide Answer";
    showTheAnswer.classList.remove("hidden");
    document.querySelector(".button").style.backgroundColor = "var(--tertiary-color)";
    document.querySelector(".button").style.color = "var(--primary-color)";
  }

  else{
    output.innerHTML="Show Answer";
    showTheAnswer.classList.add("hidden");
    document.querySelector(".button").style.backgroundColor = "var(--primary-color)";
    document.querySelector(".button").style.color = "var(--second-color)";
  }
});

  
  //Bookmark color change

  const activeBookmark = document.querySelector('[data-js="activeBookmark"]')
  const inactiveBookmark = document.querySelector('[data-js="inactiveBookmark"]')
  const clickBookmarkButton = document.querySelector('[data-js="bookmarkButton"]')

  clickBookmarkButton.addEventListener("click", () => {
    activeBookmark.classList.toggle("hidden");
    inactiveBookmark.classList.toggle("hidden");
    
  });

  //Dark-Mode

function darkMode() {
  const bodyElement = document.body;
  const colorHeadline = document.querySelector('[data-js="h1"]')
  const outputDarkModeButton = document.querySelector('[data-js="show-dark-Mode"]')
    
    if (outputDarkModeButton.innerHTML ==  "Dark Mode") {
      outputDarkModeButton.innerHTML= "Light Mode";
      bodyElement.classList.add("dark");
    colorHeadline.classList.add("dark-headline");
    document.querySelector('[data-js="self-description"]').style.color = "white";
    }
    else {
      outputDarkModeButton.innerHTML = "Dark Mode";
      bodyElement.classList.remove("dark");
    colorHeadline.classList.remove("dark-headline");
    document.querySelector('[data-js="self-description"]').style.color = "var(--primary-color)";
    }
  };
  
  


  
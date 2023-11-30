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

      console.clear();

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(event.target); 
        const data = Object.fromEntries(formData); 
      
        console.log(data);
      }); 


//Create new Cards

const newQuestion = questionInput.textContent;
const newAnswer = answerInput.textContent;
const bodyForms = document.querySelector('[data-js="body-forms“]');
const submitButton = document.querySelector('[data-js="submitButton“]');

submitButton.addEventListener("submit", () => {
    console.log("isSubmitted")
const newCard = document.createElement("section")
newCard.classList.add("question-card")
newCard.innerHTML =
`<section class="question-card" id="question-card 1">
<button type="button" class="img-bookmark" data-js="bookmarkButton"> 
    <img data-js="inactiveBookmark" src="images/bx-bookmark.svg" alt="bookmark inactive">
    <img class="hidden" data-js="activeBookmark" src="images/bxs-bookmarkActive.svg" alt="bookmark active">
</button>
    <br>
<span>${newQuestion}</span><br>
<button class="button button-yellow" data-js="showButton">
    <span data-js="showAnswer">Show Answer</span> 
</button>

<div class="answer-container">
    <span class="hidden" data-js="rightAnswer">${newAnswer}</span>
</div>

<ul class="category">
    <li><span class="tag">#html</span></li>
    <li><span class="tag">#flexbox</span></li>
    <li><span class="tag">#css</span></li>
</ul>
</section>`

console.log(newCard + "hallo");

bodyForms.append(newCard);

});







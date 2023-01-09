const ratingsCard = document.querySelector(".ratings-card");
const thanksCard = document.querySelector(".thanks-card");
const submitButton = document.querySelector(".submit");
const ratingNumbers = document.querySelectorAll(".number-container > a");
const ratingText = document.querySelector(".ratingText");
let rating;

for (let i = 0; i < ratingNumbers.length; i++) {
  ratingNumbers[i].addEventListener("click", () => {
    rating = Number(ratingNumbers[i].innerText);
  });
}
submitButton.addEventListener("click", () => {
  ratingsCard.classList.add("hidden");
  thanksCard.classList.remove("hidden");
  ratingText.innerText = `You selected ${rating} out of 5`;
});

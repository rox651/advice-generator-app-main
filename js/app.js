const adviceCont = document.querySelector(".advice__text");
const adviceDice = document.querySelector(".advice__dice");
const adviceTitle = document.querySelector(".advice__title");

window.onload = adviceGenerator();

function adviceGenerator() {
  let random = Math.floor(Math.random() * 224);
  let apiLink = `https://api.adviceslip.com/advice/${random}`;
  fetch(apiLink)
    .then((response) => response.json())
    .then((data) => {
      let obj = data.slip;
      let advice = obj.advice;
      let id = obj.id;

      adviceTitle.textContent = `Advice #${id}`;
      adviceCont.textContent = `“${advice}”`;
    })
    .catch((err) => console.log(err));
}

adviceDice.addEventListener("click", () => {
  adviceGenerator();
  adviceCont.classList.toggle("animation");
});

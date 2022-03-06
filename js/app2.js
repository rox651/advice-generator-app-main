const adviceCont = document.querySelector(".advice__text");
const adviceDice = document.querySelector(".advice__dice");
const adviceTitle = document.querySelector(".advice__title");

window.onload = adviceGenerator();

async function adviceGenerator() {
  let random = Math.floor(Math.random() * 224);
  let apiLink = `https://api.adviceslip.com/advice/${random}`;

  try {
    let respuesta = await fetch(apiLink);

    const obj = await respuesta.json();
    let advice = obj.slip.advice;
    let id = obj.slip.id;

    adviceTitle.textContent = `Advice #${id}`;
    adviceCont.textContent = `“${advice}”`;
  } catch (err) {
    console.log(err);
  }
}

adviceDice.addEventListener("click", () => {
  adviceGenerator();
  adviceCont.classList.toggle("animation");
});

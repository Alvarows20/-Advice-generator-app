const diceBtn = document.querySelector("#diceBtn");
const advice = document.querySelector("#advice");
const adviceId = document.querySelector("#adviceId");

getAdvice();

diceBtn.addEventListener("click", () => {
  getAdvice(); // Llamar a la función cuando se hace clic
});

function getAdvice() {
  // Generar un ID aleatorio entre 1 y 224 (número de consejos actuales en la API)
  const randomId = Math.floor(Math.random() * 100) + 1;

  // Llamar a la API con el ID aleatorio
  fetch(`https://api.adviceslip.com/advice/${randomId}`)
    .then((res) => res.json())
    .then((data) => {
      const adviceMsg = data.slip.advice;
      advice.innerText = adviceMsg; // Mostrar el consejo
      adviceId.innerText = data.slip.id; //Mostrar el Id
    })
    .catch((err) => {
      advice.innerText = "Error obteniendo el consejo, intenta nuevamente."; // Mostrar un mensaje de error
    });
}

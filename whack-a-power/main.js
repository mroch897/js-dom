const gameButtons = document.querySelectorAll(".game-button");
const pointsTitle = document.querySelector("#points");
const countdownTitle = document.querySelector("#countdown");
const startButton = document.querySelector("#start-game");
const result = document.querySelector("#result");

let previousButton;
let points = 0;
let time = 5;
let isPlaying = false;
let toggleButtonsInterval;

const handleToggleButtons = () => {
  if (previousButton) {
    previousButton.classList.remove("show");
  }
  const randomIndex = Math.floor(Math.random() * gameButtons.length);
  const randomButton = gameButtons[randomIndex];
  randomButton.classList.add("show");
  randomButton.classList.remove("not-clickable");
  previousButton = randomButton;
};

const handleClickGameButton = (event) => {
  const isClickable = event.target.className.includes("show");
  if (isClickable) {
    points += 1;
    pointsTitle.innerText = points;
    event.target.classList.add("not-clickable");
  }
};

const restartCountdown = () => {

};

const countdown = () => {
  // Función para manejar la cuenta regresiva del tiempo en el juego
  if (!isPlaying) {
    // Si el juego no se está ejecutando actualmente
    isPlaying = true; // Marcar el juego como en ejecución
    toggleButtonsInterval = setInterval(handleToggleButtons, 2000); // Iniciar la función que alterna los botones con un intervalo de 2 segundos
    const countdownInterval = setInterval(() => {
      // Función de intervalo para la cuenta regresiva del tiempo
      time -= 1; // Restar 1 segundo del tiempo restante
      countdownTitle.innerText = time; // Actualizar el título de la cuenta regresiva con el tiempo restante
      if (time === 0) {
        // Si el tiempo llega a cero
        clearInterval(countdownInterval); // Detener el intervalo de la cuenta regresiva
        alert("Final");
        result.innerText += `${points}`; // Actualizar el elemento de resultado con la cantidad de puntos obtenidos
        stopGame(); // Detener el juego

        
      }
    }, 1000); // Ejecutar la función de intervalo cada 1000ms (1 segundo)
  }
};

// Función para detener el juego y limpiar el intervalo y los event listeners de los botones
const stopGame = () => {
  clearInterval(toggleButtonsInterval); // Detiene el intervalo que hace aparecer y desaparecer los botones
  for (let i = 0; i < gameButtons.length; i++) {
    // Remueve los event listeners de los botones para que no se pueda seguir jugando
    gameButtons[i].removeEventListener("click", handleClickGameButton);
    
  }
  isPlaying = false; // Actualiza el estado del juego para indicar que ya no se está jugando
  points = 0; // restaurar puntos
  time = 5; // restaurar tiempo
  pointsTitle.innerText = points; // actualizar el marcador de puntos en la página
  countdownTitle.innerText = time; // actualizar el contador de tiempo en la página
};

startButton.addEventListener("click", countdown);

for (let i = 0; i < gameButtons.length; i++) {
  const gameButton = gameButtons[i];
  gameButton.addEventListener("click", handleClickGameButton);
}

// //Esta es una estructura de bucle for que se utiliza para agregar un event listener a cada uno de los botones del juego. El bucle itera sobre la lista de botones y agrega el event listener a cada uno de ellos. El event listener se llama handleClickGameButton, que es la función que maneja los clics en los botones del juego. En resumen, esta sección de código hace que cada botón sea interactivo y responde a los clics del usuario en el juego.

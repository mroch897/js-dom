let pass = "1234";

const onLoad = () => {
  checkPassword();
};

const checkPassword = () => {
  const chPass = prompt("Intorduce la contraseña si quieres acceder");

  if (pass === chPass) {
    alert("Contraseña correcta");
    const takeBody = document.querySelector("body");
    takeBody.style.display = "block";
  } else {
    alert("contraseña incorrecta");
  }
};

const divs = document.querySelectorAll(".grid-inner");
const order = ["second", "third", "first", "fourth"];
let currentOrder = 0; // el orden esperado inicial es 1

const handleClick = (event) => {
  const clickedClass = event.target.classList[1];

  if (clickedClass === order[currentOrder]) {
    currentOrder++;
    if (currentOrder === order.length) {
      alert("complet");
      currentOrder = 0;
    }
  } else {
    alert("Incorrect");
    currentOrder = 0;
  }
};

divs.forEach((div) => {
  div.addEventListener("click", handleClick);
});

window.addEventListener("load", onLoad);

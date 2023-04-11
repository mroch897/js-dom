const onCompleteGame=()=>{
    alert("Juego completado");
}


const pTetxList = [];
const buttonElement = document.getElementById("completeGame");
buttonElement.addEventListener("click", onCompleteGame);




const onMouseMove = (event) => {
  if (event.target.tagName === "P") {
    if (!pTetxList.includes(event.target.className)) {
      pTetxList.push(event.target.className);
      if (pTetxList.length === 5) {
        document.body.style.height = "200vh";
      }
    }
  }
};


let enteredPss=false;

const onScroll = () => {
  if (!enteredPss && window.scrollY > window.outerHeight / 2) {
    const password =prompt("Introduce la contraseña");
    if (password==='1234') {
        buttonElement.style.display="block";
        enteredPss = true;
    }
  }
};
window.addEventListener("mousemove", onMouseMove);
window.addEventListener("scroll", onScroll);





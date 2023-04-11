



// Crear una función que se ejecute cuando la ventana se cargue completamente (evento "load"). Dentro de esta función, se puede agregar código para inicializar elementos de la página o cargar datos externos.
const onLoad=()=>{
    console.log("Pàgina cargada");

    
}

let password='1234';

const checkPass=()=>{
    const askPass=prompt("Introdudce tu password");
    if(askPass===password){
        addHTML();
    
    }
}

const addHTML=()=>{

const newH1=document.createElement("h1");
newH1.classList.add("title");
document.body.appendChild(newH1).innerHTML="Ejercicios";
const newDiv=document.createElement("div");
newDiv.classList.add("my-div");
document.body.appendChild(newDiv);
newDiv.style.width="100px";
newDiv.style.height="100px";
newDiv.style.backgroundColor="blue";

}

window.addEventListener("load",checkPass);
window.addEventListener("load", onLoad);
// Crear una función que se ejecute cuando la ventana se cierre (evento "beforeunload" o "unload"). Dentro de esta función, se puede agregar código para guardar datos o realizar acciones antes de que el usuario cierre la ventana.
// Crear una función que se ejecute cuando la ventana se redimensione (evento "resize"). Dentro de esta función, se puede agregar código para ajustar elementos de la página al tamaño de la ventana.
// Crear una función que se ejecute cuando el usuario haga clic fuera de la ventana (evento "blur"). Dentro de esta función, se puede agregar código para pausar animaciones o hacer que los elementos de la página se vuelvan menos prominentes.
// Crear una función que se ejecute cuando el usuario vuelva a enfocar la ventana (evento "focus"). Dentro de esta función, se puede agregar código para reanudar animaciones o hacer que los elementos de la página vuelvan a ser más prominentes.




// alert("Password correct");
// const newDiv=document.createElement("div");
// newDiv.classList.add("my-div");
// document.body.appendChild(newDiv);
// const myScript = document.querySelector("script"); // seleccionar el elemento script
// document.body.appendChild(myScript); // mover el elemento script al final del body
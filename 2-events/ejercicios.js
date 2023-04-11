


// Crea un botón que, al hacer clic, cambie el color de fondo de la página.
let isColorChanged= false;
const changeColor =()=>{
    if(!isColorChanged){
        document.body.style.backgroundColor = "red";
        isColorChanged=true;
    }else{
        document.body.style.backgroundColor = "";
        isColorChanged=false;
    }

}
const buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", changeColor);

// Crea una función que muestre una alerta con el mensaje "¡Hola!" cada vez que el usuario coloque el mouse sobre un elemento específico en la página.
let outText=false;
const textP= document.querySelector("p");

const showAlert=()=>{
    if(!outText){
        textP.innerHTML="Puta";
        outText=true;
    }
}

const hideAlert=()=>{
    if(outText){
        textP.innerHTML=" "
        outText=false;
    }
}


const h2Element= document.querySelector("h2");

h2Element.style.width="300px";

h2Element.addEventListener("mouseenter", showAlert);
h2Element.addEventListener("mouseleave", hideAlert);

// Crea un input y un botón que permitan al usuario agregar un elemento a una lista. Cada vez que se agrega un elemento, debe mostrarse en la lista.
const addElementsAtList=()=>{
const inputElement = document.getElementById("inputElement");
const listElement = document.getElementById("add");
const text=inputElement.value;
if(text){
    const liElement= document.createElement("li");
    liElement.textContent=text;
    listElement.appendChild(liElement);
    inputElement.value="";
}

}

const addElementValue=document.getElementById("addElement");
addElementValue.addEventListener("click", addElementsAtList);



// Crea una función que cambie el tamaño de la fuente en un elemento cada vez que el usuario hace clic en un botón.
let fontS=false
const fontSize=document.getElementById("font");
const changeFont=()=>{
    if(!fontS){
        fontSize.style.fontSize="100px";
        fontS=true;

    }else{
        fontSize.style.fontSize="";
        fontS=false;
    }
    
    
}

const buttonFont=document.getElementById("changeFontSize");
buttonFont.addEventListener("click", changeFont)
// Crea una función que oculte un elemento en la página cada vez que el usuario hace clic en un botón.
let imageS=true;
const imageSelect=document.getElementById("im");
const hideButton= document.getElementById("hideElement");

const hideImage=()=>{
    if(imageS){
        imageSelect.style.display="none";   
        imageS=false;
    }else{
        imageSelect.style.display="block";
        imageS=true;
    }


}
hideButton.addEventListener("click", hideImage)

// Crea un formulario con campos de entrada para nombre y correo electrónico, y un botón de envío. Valida que ambos campos tengan contenido antes de permitir que el usuario envíe el formulario.
const formSend=document.querySelector("form");
const messageSendText=document.getElementById("name");
const messageEmailText=document.getElementById("mail");

const formOk=(event)=>{
    event.preventDefault(); // El método preventDefault() es un método del objeto Event que se utiliza para prevenir el comportamiento predeterminado de un evento. En este caso, al hacer clic en el botón de envío, el comportamiento predeterminado del formulario es enviar los datos a un servidor y recargar la página. Al llamar a preventDefault() en el evento submit, evitamos que se envíen los datos y se recargue la página.

    if(messageSendText.value.trim()!=='' && messageEmailText.value.trim()!=="" ){
        alert("Formulario Enviado");
    }else{
        alert("Te faltan datos por rellenar");
    }  
}

formSend.addEventListener('submit', formOk);


// Crea una función que muestre una imagen cada vez que el usuario coloca el mouse sobre un elemento específico en la página.
let outImage=false;

const showImg=document.getElementById("images");



const anadirImagen=()=>{
    if(!outImage){
        showImg.src="./assets/imagen.jpg"
        showImg.style.width="200px"
        outImage=true;
    }

}

const ocultarImagen=()=>{
    if(outImage){
        showImg.src="";
        outImage=false;
    }
}

const actions= document.getElementById("showimg");
actions.addEventListener("mouseover", anadirImagen);
actions.addEventListener("mouseleave", ocultarImagen);

// Crea una función que permita al usuario hacer clic en una imagen para cambiarla por otra imagen.
let wImage=false
const changeImage=document.getElementById("changeImg");

const otherImage=()=>{
    if(!wImage){
        changeImage.src="./assets/imagen2.jpg";
        wImage=true;
    }else{
        changeImage.src="./assets/imagen.jpg";
        wImage=false;
    }
    
    
}

changeImage.addEventListener("click", otherImage);
// Crea un botón que cambie el color de un texto en la página cada vez que el usuario hace clic en él.

let changeOther=false;

const changeColorT=document.getElementById("color");

const changeColors=()=>{
    if(!changeOther){
        changeColorT.style.color="blue"
        changeOther=true;
    }else{
        changeColorT.style.color="black"
        changeOther=false;
    }

    
}

const changeH2Color=document.getElementById("changeColorText");
changeH2Color.addEventListener("click", changeColors);


// Crea una función que permita al usuario hacer clic en un botón para mostrar u ocultar un elemento en la página.

const dissapearT=document.getElementById("titleDiss");

const dissapearH2=()=>{
    dissapearT.style.display="none";
}

const dissapearButton=document.getElementById("dissapear");
dissapearButton.addEventListener("click",dissapearH2)
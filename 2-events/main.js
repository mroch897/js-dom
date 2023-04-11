let inputValue='';

const onButtonClicked=()=>{
    alert(`El input tiene como valor: ${inputValue}`);
    //document.querySelector("#input-text").textContent="hola"; // para añadir un texto al hacer click
}


const inputChanged =(event)=>{
    
    //inputValue=input.value;
    inputValue=event.target.value
     const inputTexth3= document.querySelector("#input-text");
     inputTexth3.innerText=inputValue
   // document.querySelector("#input-text").innerText=inputValue; (( otra manera de hacerlo))
    

}

const buttonElement=document.querySelector('button');

buttonElement.addEventListener("click", onButtonClicked);

const inputElement=document.querySelector('input[type="text"]');
inputElement.addEventListener("input", inputChanged);


// En el código que me compartiste, inputValue es una variable global inicializada en una cadena vacía. Luego, se definen dos funciones: onButtonClicked y inputChanged.

// La función onButtonClicked se ejecuta cuando se hace clic en el botón y muestra una alerta que incluye el valor de la variable inputValue. Sin embargo, como inputValue se inicializó como una cadena vacía y nunca se actualizó, siempre se muestra como vacío.

// La función inputChanged se ejecuta cuando el valor del input cambia. En esta función, se actualiza el valor de la variable inputValue con el valor actual del input (event.target.value). Luego, se selecciona el elemento con id input-text y se actualiza su texto con el valor actual de inputValue.

// Finalmente, se agregan dos event listeners. El primero se ejecuta cuando se hace clic en el botón y llama a la función onButtonClicked. El segundo se ejecuta cuando el valor del input cambia y llama a la función inputChanged.

// Con estas modificaciones, al escribir en el input, se actualiza el valor de la variable inputValue y se muestra en el elemento con id input-text. Cuando se hace clic en el botón, se muestra una alerta con el valor actual de inputValue.
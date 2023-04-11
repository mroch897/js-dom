// // Hay dos formas: setTimeout e intervals
// const lightOn=()=>{
//     alert("Hola");
// }

// setTimeout(() => { // Primero se invoca una función.
   
// }, 3000);// despues de la coma, se establece el número de milisegundos que queremos que pase hasta invocar dicha función

let timeout;

let timeoutTime=2000; // podemos crear variable para pasarsela al timeout
const toggleButton=document.querySelector("#toggle");
const lightbulb=document.querySelector("#lightbulb");
const timerInput=document.querySelector("#inputimer");

const toggleLightbulb=()=>{
    lightbulb.classList.toggle("off"); // toggle comprueba si tiene la clase o no
    lightbulb.classList.toggle("on");

}

const turnOffLightBulb=()=>{
    lightbulb.classList.add("off");
    lightbulb.classList.remove("on");
}
// Creamos esta función para apagar

const handleToggle=()=>{// el problema es que si enciendo o apago manualmente se ejecuta igual entonces creamos la función de arriba
    if(timeout){
        clearTimeout(timeout); // limpiamos el contador

    }
    
    
    toggleLightbulb()

    setTimeout(turnOffLightBulb, timeoutTime); 

}


const handleInputTime=(event)=>{
    const newTimer= event.target.valueAsNumber;
    console.log("Time", newTimer);
    timeoutTime=newTimer;

}


toggleButton.addEventListener("click", handleToggle)
timerInput.value=timeoutTime; // así le damos valor de inicio al input
timerInput.addEventListener("input", handleInputTime)
const tecnologies=[
    'Javascript',
    'Css',
    'Html',
    'React',
    'Dom'

];

const addList=()=>{
const listElement=document.createElement("ul");
listElement.className="tecnhologies";

for(let i=0; i<tecnologies.length;i++){
   const technlogy=tecnologies[i];
   const liElement= document.createElement("li");
   const buttonElement=document.createElement("button");
   buttonElement.innerText="Eliminar";
   buttonElement.className="delete-button";
   liElement.innerHTML=technlogy;
   liElement.appendChild(buttonElement);
   listElement.appendChild(liElement);

   

}

document.body.append(listElement);

}

const handleDelete=(event)=>{
    const liElement=event.target.parentElement;
    console.log(liElement);
    liElement.remove();

}

const addElement=()=>{
    const inputContent=document.getElementById("add");
    const text=inputContent.value;
    if(text.trim()!==""){ //// Verifica si el valor ingresado no está vacío
    tecnologies.push(text);
    const listElement = document.querySelector(".tecnhologies");
    const liElement= document.createElement("li");
    const buttonElement=document.createElement("button");
    buttonElement.innerText="Eliminar";
    buttonElement.className="delete-button";
    liElement.innerHTML=text;
    liElement.appendChild(buttonElement);
    listElement.appendChild(liElement);
    inputContent.value = ""; //Limpia el campo de entrada
    addDeleteListener();//// Vuelve a agregar el evento click al botón eliminar
    }else{
        alert("No has introducido ningún valor");
    }

   
    
}


const addDeleteListener=()=>{
    const deleteButtons=document.querySelectorAll(".delete-button");
    for(let i=0;i<deleteButtons.length;i++){
        const deleteButton=deleteButtons[i];
        deleteButton.addEventListener('click', handleDelete)

    };
}



const addButton=document.querySelector(".add-element");
addButton.addEventListener("click", addElement)
window.addEventListener('load',addList);
window.addEventListener('load',addDeleteListener);




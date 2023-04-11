// Un selector es una función de JS que se encarga de buscar un elemento en el cóígo



console.log("Hola soy el Js");

const title= document.querySelector("h1"); // Con querySelector, seleccionamos cualquier elemento

console.log(title);

title.innerText='Aprendemos selectores con js';

const secondTitle = document.querySelector('h2');

console.log(secondTitle);

const lastSecondTitleH2= document.querySelector('h2:last-of-type');

console.log(lastSecondTitleH2);

// para seleccionar por id:

const studyTitle= document.getElementById('study');

console.log(studyTitle);

const technologies = document.getElementsByClassName('technology');

for(let i=0;i<technologies.length;i++){
    const technology=technologies[i];
    const preText= technology.innerText
    technology.innerText= `${i+1}-${preText}`;
}

const ulSelectors = document.querySelector("ul");

ulSelectors.style.listStyleType='none';


//Podemos usar queryselector con todos haciendo queryselectorall

const thePowerURL= 'https://www.thepowermba.com/es/';
const titleLink=document.querySelector('h2.title-link>a');
titleLink.href=thePowerURL;
titleLink.style.cssText='text-decoration:none; color:black;';

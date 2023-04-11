

let num=0

const bodyColor=document.querySelector("body");
const changeBackgroundColor=()=>{
    if(num==0){
        bodyColor.style.backgroundColor="red";
        num = 1;
     }else if(num==1){
        bodyColor.style.backgroundColor="green";
        num = 2;
     }else if(num==2){
        bodyColor.style.backgroundColor="blue";
        num = 0;
     }
}


setInterval(changeBackgroundColor, 1000);
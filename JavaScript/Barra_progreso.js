const progress=document.getElementById('progress')
let porcentaje=document.getElementById('porcentaje')
let cantidad=0;
let cantidad2=630;

let tiempo=setInterval(() => {
    cantidad+=1;
    let value=Math.ceil(cantidad2-=6.3)
    porcentaje.textContent=cantidad+'%'
    progress.style.strokeDashoffset=`${value}`

    if(cantidad===100){
        clearInterval(tiempo)
    }
},80);

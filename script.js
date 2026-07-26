// =========================
// COMPROBAR SCRIPT
// =========================

console.log("Carta romántica cargada ❤️");


// =========================
// ELEMENTOS
// =========================

const sobre = document.getElementById("clickSobre");
const pregunta = document.getElementById("pregunta");

const botonSi = document.getElementById("si");
const botonNo = document.getElementById("no");



// =========================
// ABRIR SOBRE
// =========================

sobre.addEventListener("click",()=>{


    sobre.classList.add("abrir");


    setTimeout(()=>{

        pregunta.style.display="flex";

    },800);


});




// =========================
// BOTÓN NO ESCAPA
// =========================

function moverNo(){


    const ancho =
    window.innerWidth - botonNo.offsetWidth - 50;


    const alto =
    window.innerHeight - botonNo.offsetHeight - 50;


    const x=Math.random()*ancho;
    const y=Math.random()*alto;


    botonNo.style.position="fixed";

    botonNo.style.left=x+"px";

    botonNo.style.top=y+"px";


}



botonNo.addEventListener(
"mouseenter",
moverNo
);


botonNo.addEventListener(
"click",
(e)=>{

e.preventDefault();

moverNo();

});




// =========================
// BOTÓN SÍ
// =========================

botonSi.addEventListener("click",()=>{


document.body.classList.add("fadeOut");


// crear corazones

crearCorazones();



setTimeout(()=>{


window.location.href="carta.html";


},1500);



});




// =========================
// CORAZONES FLOTANDO
// =========================

function crearCorazones(){


for(let i=0;i<20;i++){


let corazon=document.createElement("div");


corazon.innerHTML="❤️";


corazon.className="corazon";


corazon.style.left=
Math.random()*100+"vw";


corazon.style.animationDuration=
(2+Math.random()*3)+"s";


document.body.appendChild(corazon);


setTimeout(()=>{

corazon.remove();

},5000);


}


}

function crearPetalos(){

for(let i=0;i<30;i++){

let petalo=document.createElement("div");

petalo.innerHTML="🌸";

petalo.className="petalo";

petalo.style.left=Math.random()*100+"vw";

petalo.style.animationDuration=
(5+Math.random()*5)+"s";


document.body.appendChild(petalo);

}

}

crearPetalos();
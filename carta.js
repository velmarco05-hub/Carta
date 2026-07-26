const paginas = [
`<div class="florSuperior">🌹</div><h1>Para ti,<br>Mariana</h1><div class="adorno">❦</div>
<p>Hola Mariana...</p><p>Mi Maripu, mi princesa, mi primer y espero que también mi último amor.</p>
<p>Si estás leyendo esto, gracias por darme la oportunidad de que mis palabras lleguen nuevamente hasta ti.</p>
<p>Solo quiero abrirte mi corazón como nunca antes lo había hecho.</p>`,

`<p>Antes que nada... quiero pedirte perdón.</p><hr>
<p>Perdón por todas las veces en las que mis errores terminaron haciéndote daño. Hoy entiendo muchas cosas que antes no era capaz de ver.</p><hr>
<p>Eres la persona más importante que ha llegado a mi vida. Y precisamente por eso, si te pierdo será el dolor más grande que he sentido.</p><hr>
<p>Desde el momento en que me dijiste que querías volver a conocernos, hice una promesa conmigo mismo.</p>`,

`<p>Me prometí cambiar. No porque alguien me obligara, sino porque no quiero convertirme en una persona incapaz de mejorar.</p><hr>
<p>No quiero repetir errores que vi durante toda mi vida. No quiero ser alguien que lastime a quien ama simplemente por no controlar sus emociones.</p><hr>
<p>Quiero ser un hombre del que puedas sentirte orgullosa. Un hombre que te haga sentir tranquila, segura, protegida y feliz.</p><hr>
<p>Ese cambio comenzó desde el mismo instante en que entendí que podía perderte.</p>`,

`<p>Tú fuiste mi primer amor de verdad.</p><hr>
<p>Me enamoré de ti desde la primera vez que te vi. De tu sonrisa. De tu voz. De tu forma de reír. De tus ocurrencias. De la manera en que hacías especiales hasta los momentos más simples.</p><hr>
<p>Me enamoré de Mariana Neuto Naranjo. Y aunque el tiempo pase, jamás cambiaría absolutamente nada de ti.</p>`,

`<p>También quiero pedirte perdón por la imagen que te dejé durante estas últimas semanas.</p><hr>
<p>Sé que viste a un Marco muy ansioso, muy insistente y con mucho miedo.</p><hr>
<p>Pero ese no soy realmente yo. Fue la primera vez que amé a alguien con todo mi corazón. Y el miedo a perderte terminó convirtiéndose en ansiedad.</p><hr>
<p>No era falta de amor. Era precisamente porque te amaba tanto, que me aterraba imaginar un día donde simplemente dejaras de estar conmigo.</p>`,

`<p>Confiaste en mí. Y yo confié en ti desde el primer momento.</p><hr>
<p>Te conté cosas que ni siquiera las personas más cercanas a mí conocen. Y jamás me arrepentiré de haberlo hecho.</p><hr>
<p>Porque siempre sentí que tú me aceptabas tal como era. Con mis virtudes, mis defectos, mis miedos y mis inseguridades.</p><hr>
<p>Gracias por hacerme sentir querido cuando más lo necesitaba.</p>`,

`<p>También quiero pedirte perdón por acciones que jamás debieron pasar. Por lo de la billetera. Por las veces que levanté la voz. Y por cualquier momento en el que te hice sentir incómoda o triste.</p><hr>
<p>Nunca actué con la intención de hacerte daño. Pero sé que las intenciones no borran las consecuencias. Y por eso asumo completamente la responsabilidad de mis errores.</p><hr>
<p>Muchas veces, cuando estoy solo, pienso en todo eso. Me reprocho haber reaccionado de esa manera. Ojalá pudiera regresar el tiempo para hacerlo diferente.</p>`,

`<p>Por eso hoy solo quiero pedirte una cosa.</p><hr>
<p>No te pido que olvides todo de un día para otro. No te pido que confíes únicamente en estas palabras.</p><hr>
<p>Solo te pido una oportunidad para que puedas ver mi cambio en persona. Quiero que seas tú quien juzgue si realmente he cambiado.</p><hr>
<p>Si después de verme sientes que sigo siendo el mismo, aceptaré tu decisión. Pero me dolería muchísimo no haber tenido la oportunidad de demostrarte quién soy ahora.</p>`,

`<p>No quiero convencerte solamente con palabras. Quiero que algún día puedas ver con tus propios ojos al Marco que ha estado esforzándose por cambiar.</p><hr>
<p>El Marco del que te enamoraste sigue aquí. Solo que durante estas últimas semanas dejó que el miedo hablara más fuerte que el amor.</p><hr>
<p>Mientras escribo esta carta tengo los ojos llenos de lágrimas. No porque quiera dar lástima, sino porque realmente me duele imaginar una vida donde tú ya no estés.</p><hr>
<p>Pase lo que pase, siempre voy a agradecer haber coincidido contigo. Gracias por cada abrazo, por cada beso, por cada risa y por todos los recuerdos que me regalaste.</p>`,

`<p>Solo quiero pedirte una última cosa...</p><hr>
<p>Cuídate mucho. Espero de corazón que te recuperes muy pronto de la gripa.</p><hr>
<p>Espero que me des una oportunidad para demostrarte mi cambio en persona; prometo que hablarán mis acciones mucho más que mis palabras.</p><hr>
<div class="adorno-final">❦</div><h2>Con todo mi amor,<br><br>Marco Velasco ❤️</h2>`
];

let pliegoActual = 0;
const totalPliegos = Math.ceil(paginas.length / 2);
const izquierda = document.getElementById("paginaIzquierda");
const derecha = document.getElementById("paginaDerecha");
const anterior = document.getElementById("prev");
const siguiente = document.getElementById("next");
const progreso = document.getElementById("progreso");

function renderizarLibro(direccion = 1) {
    const primera = pliegoActual * 2;
    const clase = direccion > 0 ? "pasar-adelante" : "pasar-atras";
    izquierda.innerHTML = `${paginas[primera]}<div class="page-number">${primera + 1}</div>`;
    derecha.innerHTML = `${paginas[primera + 1] ?? ""}<div class="page-number">${primera + 2}</div>`;
    document.querySelector(".book").classList.remove("pasar-adelante", "pasar-atras");
    void document.querySelector(".book").offsetWidth;
    document.querySelector(".book").classList.add(clase);
    anterior.disabled = pliegoActual === 0;
    siguiente.disabled = pliegoActual === totalPliegos - 1;
    progreso.textContent = `${pliegoActual + 1} / ${totalPliegos}`;
}

anterior.addEventListener("click", () => { if (pliegoActual > 0) { pliegoActual--; renderizarLibro(-1); } });
siguiente.addEventListener("click", () => { if (pliegoActual < totalPliegos - 1) { pliegoActual++; renderizarLibro(1); } });

const musica = document.getElementById("musica");
const playMusic = document.getElementById("playMusic");
playMusic.addEventListener("click", async () => {
    try { await musica.play(); playMusic.textContent = "🤍 Disfruta la carta"; playMusic.disabled = true; }
    catch { playMusic.textContent = "No se pudo reproducir la canción"; }
});

const petalos = document.getElementById("petalos");
for (let i = 0; i < 28; i++) {
    const petalo = document.createElement("span");
    petalo.className = "petalo";
    petalo.textContent = "🌸";
    petalo.style.left = `${Math.random() * 100}vw`;
    petalo.style.animationDuration = `${7 + Math.random() * 7}s`;
    petalo.style.animationDelay = `${Math.random() * 7}s`;
    petalos.appendChild(petalo);
}

renderizarLibro();

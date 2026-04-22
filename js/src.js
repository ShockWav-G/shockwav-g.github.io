// 1. El ID debe ir entre comillas
const men = document.getElementById('men');

// 2. El HTML debe estar envuelto en comillas (preferiblemente backticks ``)
const menu_cont = `
<div class="menu"> 
    <span style="cursor: pointer;" onclick="location.href='/'"> Conoce Tu Río </span> 
    <span class="btn_menu" id="btn1"> Contenido técnico </span> 
    <span class="btn_menu" id="btn2"> Proyectos artísticos </span> 
</div>`;

// 3. Insertar el contenido
men.innerHTML = menu_cont;

const btns = document.getElementById('btns');
const btns_cont = `
	<span class="btn_table" id="btntble">

		<span class="btn" id="ObsRio">Observo mi río</span>
		<span class="btn" id="PasadoRio">Pasado de mi río</span>
		<span class="btn" id="PropuestasRio">Propuestas de mejora</span>
	</span>
	<span class="btn_table" id="btntble2">

		<span class="btn" id="Maqueta">Maqueta del río</span>
		<span class="btn" id="Libro">Libro de propuestas</span>
	</span>

`;

btns.innerHTML = btns_cont;

const btn = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btntble = document.getElementById("btntble");
const btntble2 = document.getElementById("btntble2");
const ObsRio = document.getElementById("ObsRio");
const PropuestasRio = document.getElementById("PropuestasRio");
const PasadoRio = document.getElementById("PasadoRio");
const Maqueta = document.getElementById("Maqueta");
const Libro = document.getElementById("Libro");


btn.addEventListener("click", () => {

  btntble.classList.toggle("active");
  btntble2.classList.remove("active");

})
btn2.addEventListener("click", () => {

  btntble2.classList.toggle("active");
  btntble.classList.remove("active");

})


ObsRio.addEventListener("click", () => {
  location.href = "/content/Observaciones.html";

});

PropuestasRio.addEventListener("click", () => {
  location.href = "/content/Propuestas.html";
});
PasadoRio.addEventListener("click", () => {
  location.href = "/content/Pasado.html";
});
Maqueta.addEventListener("click", () => {
  location.href = "/content/Maqueta.html";
});

Libro.addEventListener("click", () => {
  location.href = "/content/Libro.html";
});





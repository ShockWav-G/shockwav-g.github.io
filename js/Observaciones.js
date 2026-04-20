
const display = document.getElementById("display");
const RegresoNutria = document.getElementById("RegresoNutria");
const EspeciesInvasoras = document.getElementById("EspeciesInvasoras");
const Analisis = document.getElementById("Analisis");
const Flora = document.getElementById("Flora");

RegresoNutria.addEventListener("click", () => {
  display.setAttribute("src", "/res/RegresoNutria.pdf");
  display.setAttribute("style", "z-index:100; height: 600px");
})
EspeciesInvasoras.addEventListener("click", () => {
  display.setAttribute("style", "z-index:100; height: 600px;");
  display.setAttribute("src", "/res/EspeciesInvasoras.pdf");
})
Analisis.addEventListener("click", () => {
  display.setAttribute("src", "/res/Analisis.pdf");
  display.setAttribute("style", "z-index:100; height: 600px");
})
Flora.addEventListener("click", () => {
  display.setAttribute("src", "/res/Flora.pdf");
  display.setAttribute("style", "z-index:100; height: 600px");
})

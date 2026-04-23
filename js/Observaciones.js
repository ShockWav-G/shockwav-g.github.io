
const display = document.getElementById("display");
const RegresoNutria = document.getElementById("RegresoNutria");
const EspeciesInvasoras = document.getElementById("EspeciesInvasoras");
const Analisis = document.getElementById("Analisis");
const Analisis2 = document.getElementById("Analisis2");
const Analisis3 = document.getElementById("Analisis3");
const Flora = document.getElementById("Flora");
const UsosTajo = document.getElementById("UsosTajo");
const Fauna = document.getElementById("Fauna");

function sc() {
  display.scrollIntoView({ block: "start" });
}

RegresoNutria.addEventListener("click", () => {
  display.setAttribute("src", "/res/RegresoNutria.pdf");
  display.setAttribute("style", "z-index:100; height: 600px");
  sc();
})
EspeciesInvasoras.addEventListener("click", () => {
  display.setAttribute("style", "z-index:100; height: 600px;");
  display.setAttribute("src", "/res/EspeciesInvasoras.pdf");
  sc();
})
Analisis.addEventListener("click", () => {
  display.setAttribute("src", "/res/CalidadAgua.pdf");
  display.setAttribute("style", "z-index:100; height: 600px");
  sc();
})
Analisis2.addEventListener("click", () => {
  display.setAttribute("src", "/res/Analisis2.pdf");
  display.setAttribute("style", "z-index:100; height: 600px");
  sc();
})
Analisis3.addEventListener("click", () => {
  display.setAttribute("src", "/res/Analisis3.pdf");
  display.setAttribute("style", "z-index:100; height: 600px");
  sc();
})
Flora.addEventListener("click", () => {
  display.setAttribute("src", "/res/Flora.pdf");
  display.setAttribute("style", "z-index:100; height: 600px");
  sc();
})

UsosTajo.addEventListener("click", () => {
  display.setAttribute("src", "/res/UsosTajo.pdf");
  display.setAttribute("style", "z-index:100; height: 600px");
  sc();
})
Fauna.addEventListener("click", () => {
  display.setAttribute("src", "/res/Fauna.pdf");
  display.setAttribute("style", "z-index:100; height: 600px");
  sc();
})

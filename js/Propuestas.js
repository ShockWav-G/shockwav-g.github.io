
const display = document.getElementById("display");
const Plogging = document.getElementById("Plogging");
const PlanLimpieza = document.getElementById("PlanLimpieza");
const Sumergidos = document.getElementById("Sumergidos");


Plogging.addEventListener("click", () => {
  display.setAttribute("src", "/res/Plogging.pdf");
  display.setAttribute("style", "z-index:100; height: 600px");
})
PlanLimpieza.addEventListener("click", () => {
  display.setAttribute("style", "z-index:100; height: 600px;");
  display.setAttribute("src", "/res/PlanLimpieza.pdf");
})
Sumergidos.addEventListener("click", () => {
  display.setAttribute("src", "/res/Sumergidos.pdf");
  display.setAttribute("style", "z-index:100; height: 600px");
})

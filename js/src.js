const btn = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btntble = document.getElementById("btntble");
const btntble2 = document.getElementById("btntble2");
const ObsRio = document.getElementById("ObsRio");
const PropuestasRio = document.getElementById("PropuestasRio");
const PasadoRio = document.getElementById("PasadoRio");

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

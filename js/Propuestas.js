
const display = document.getElementById("display");
const Plogging = document.getElementById("Plogging");
const PlanLimpieza = document.getElementById("PlanLimpieza");
const Sumergidos = document.getElementById("Sumergidos");
const Depuradora = document.getElementById("Depuradora");

const contv = `
    <video style="width:100%; height:90%;" width="320" height="240" controls>
      Tu navegador no soporta el vídeo embebido.
      <source src="/res/Depuradora.mp4" type="video/mp4">

    </video>
`

function setPDF(PDF) {
  const cont = `
    <embed style ="height: 600px;" src = "${PDF}" type="application/pdf" width="100%" height="600px">
`;

  display.innerHTML = cont;
}
function setVid() {
  display.innerHTML = contv;
}
function sc() {
  display.scrollIntoView({ block: "start" });
}

Plogging.addEventListener("click", () => {
  setPDF("/res/Plogging.pdf");
  sc();
})
PlanLimpieza.addEventListener("click", () => {
  setPDF("/res/PlanLimpieza.pdf");
  sc();
})
Sumergidos.addEventListener("click", () => {
  setPDF("/res/Sumergidos.pdf");
  sc();
})

Depuradora.addEventListener("click", () => {
  setVid();
  sc();
})

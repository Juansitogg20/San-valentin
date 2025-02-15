let stitch = document.querySelector(".stitch-animation")
let comeGalleta = document.querySelector(".comeGalleta")


let tarjetaStitch = document.querySelector(".stitch")
let tarjetacomeGalleta = document.querySelector(".comeGalletas")

let carta = document.querySelector(".carta");
let cartaImg = document.querySelector(".cartaIMG")
let tiburon = document.querySelector(".tiburon")
let tiburonIMG = document.querySelector(".tiburon-animation")
function animacion(clase1, clase2) {
    clase1.addEventListener("mouseenter", () => {
        clase2.classList.add("animacionIMG")
    })
    clase1.addEventListener("mouseleave", () => {
        clase2.classList.remove("animacionIMG")
    })
}
animacion(tiburon, tiburonIMG)
animacion(carta, cartaImg);
animacion(tarjetaStitch,stitch);
animacion(tarjetacomeGalleta, comeGalleta);





let ventana = document.querySelector(".pregunta")
let abrirPregunta = document.querySelector(".botonPregunta")

abrirPregunta.addEventListener("click", () => {
    ventana.classList.add("preguntaAbierta")

})
let No = document.querySelector(".No");
let Si = document.querySelector(".Si");
let audioNo = new Audio(`../sound/Ike insulta a su mamá - south park (mp3cut.net).mp3`)
let insulto= document.querySelector(".insulto")
No.addEventListener("click", () => {
    audioNo.play();
    insulto.classList.add("insultoAnimacion")
    No.style.visibility = "hidden"
})
let audioSi = new Audio("../sound/Niños gritando - Kids Yeah Sound.mp3")
Si.addEventListener("click", () => {
    ventana.classList.remove("preguntaAbierta")
    flores.classList.add("flores2");
    corazon.classList.add("corazon2");
    teAmo.classList.add("teAmo2");
    ventanaSi.classList.add("animacionSi2")
    audioSi.play()
    setTimeout(() => {
        ventanaSi.classList.remove("animacionSi2")
        flores.classList.remove("flores2");
        corazon.classList.remove("corazon2");
        teAmo.classList.remove("teAmo2");
        ventanaSi.classList.remove("animacionSi2")
    }, 5000)
})

let flores = document.querySelector(".flores")
let corazon = document.querySelector(".corazon")
let teAmo = document.querySelector(".teAmo")
let ventanaSi = document.querySelector(".animacionSi")


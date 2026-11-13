const lampada = document.querySelector("#lampada");
const status = document.querySelector("#status");
const botao = document.querySelector("#botao");

let ligada = false;

botao.addEventListener("click", () => {
    ligada = !ligada;
    lampada.classList.toggle("apagada");

    if (ligada) {
        status.textContent = "A Lampada está ligada";
        botao.textContent = "Desligar";
    } else {
        status.textContent = "A Lampada está apagada";
        botao.textContent = "Ligar";
    }
});


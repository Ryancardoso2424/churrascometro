

let resultado = document.getElementById('resultado');

function calcular() {

    let inputAdultos = document.getElementById('adultos').value;
    let inputCriancas = document.getElementById('criancas').value;
    let inputDuracao = document.getElementById('duracao').value;


    let totalCarne = carnePP(inputDuracao) * inputAdultos + (carnePP(inputDuracao) / 2 * inputCriancas);
    let totalCerveja = cervejaPP(inputDuracao) * inputAdultos;
    let totalBebida = bebidaPP(inputDuracao) * inputAdultos + (bebidaPP(inputDuracao) / 2 * inputCriancas);
    let carneTf = totalCarne.toFixed(2);

    resultado.innerHTML = `<p>${carneTf / 1000} Kg de carne.</p>`
    resultado.innerHTML += `<p>${Math.ceil(totalCerveja / 355)} Latas de Cerveja.</p>`
    resultado.innerHTML += `<p>${Math.ceil(totalBebida / 2000)} Refrigerante.</p>`
}

function carnePP(inputDuracao) {
    if (inputDuracao >= 6) {
        return 650;
    } else {
        return 400;
    }

}

function cervejaPP(inputDuracao) {
    if (inputDuracao >= 6) {
        return 2000;
    } else {
        return 1500;
    }

}

function bebidaPP(inputDuracao) {
    if (inputDuracao >= 6) {
        return 3000;
    } else {
        return 2000;
    }

}




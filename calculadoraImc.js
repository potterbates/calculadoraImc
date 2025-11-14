function calcular() {
    //dados de entrada
    const peso = document.getElementById("peso").value
    const altura = document.getElementById("altura").value
    //dados de processamento
    let calculandoImc = peso / (altura * altura)
    let total = calculandoImc
    //saída
    let resultado = total
    document.getElementById("resultado").textContent = resultado

    if (total < "16.9") {
        let classificação = "Muito abaixo do peso"
        document.getElementById("classificação").textContent = classificação
    }
    if (total > "17") {
        let classificação = "Abaixo do peso"
        document.getElementById("classificação").textContent = classificação
    }
    if (total > "18.5") {
        let classificação = "Peso normal"
        document.getElementById("classificação").textContent = classificação
    }
    if (total > "25") {
        let classificação = "Acima do peso"
        document.getElementById("classificação").textContent = classificação
    }
    if (total > "30") {
        let classificação = "Obesidade grau 1"
        document.getElementById("classificação").textContent = classificação
    }
    if (total > "35") {
        let classificação = "Obesidade grau 2"
        document.getElementById("classificação").textContent = classificação
    }
    if (total > "40") {
        let classificação = "Obesidade grau 3"
        document.getElementById("classificação").textContent = classificação
    }
}
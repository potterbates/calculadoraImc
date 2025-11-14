function calcular() {
    //dados de entrada
    const peso = document.getElementById("peso").value
    const altura = document.getElementById("altura").value
    //dados de processamento
    let calculandoImc = peso / (altura*altura)
    let total = calculandoImc
    //saída
    let resultado = total
    document.getElementById("resultado").textContent = resultado

    if (total < "16.9") {
        let classificação = "Muito abaixo do peso"
        document.getElementById("classificação").textContent = classificação
    }
    if (total > "18.4") {
        let classificação = "Abaixo do peso"
        document.getElementById("classificação").textContent = classificação
    }
    if (total > "25") {
        let classificação = "Peso normal"
        document.getElementById("classifação").textContent = classificação
    }
}
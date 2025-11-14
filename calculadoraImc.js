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
}
//Israel Bernardo de Assis Silva
//2020024999

console.log("teste do js");

//função com todo o calculo elaborado
function calculaentrega() {
    let distancia, tempo, seguro, manutencao, oleo, gasolina, lucro, custov, custotempo, total;
    distancia = parseFloat(document.getElementById("edtKM").value)
    tempo = parseFloat(document.getElementById("edtTempo").value)

    seguro = 0.50;
    manutencao = 0.05 * distancia;
    oleo = (0.022 * distancia) * 2;
    gasolina = (0.193 * distancia) * 2; //custo de gasolina com base na distancia indicada pelo usuario
    lucro = 0.50 * distancia; //Lucro com base na distancia
    custov = (distancia * 0.022) + (distancia * 0.193); //custo da volta levando em conta apenas o gasto de volta da corrida
    if (distancia > 15){ //condições que aumenta o lucro do entregador com base na distancia
        lucro = 5 + (distancia * 0.75);
    } if (distancia > 22){
        lucro = 7 +(distancia * 0.65);
    } if (distancia >= 50){
        lucro = 10 + (distancia * 0.55);
    } if (tempo >= 20){ //condições que aumenta o lucro do entregador com base no tempo gasto
        custotempo = 2 + (tempo * 0.17);
    } else if (tempo < 20) {
        custotempo = 2;
    }

    total = seguro + manutencao + oleo + gasolina + lucro + custov + custotempo; //somando todos os valores inclusos na corrida

    document.getElementById("resp").innerText = "Resposta: Com " + distancia +
     " km e " + tempo + " minutos, o valor da corrida será: " + total.toFixed(2); //imprimindo o resultado
}
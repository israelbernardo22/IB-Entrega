//Israel Bernardo de Assis Silva
//2020024999

console.log("teste do js");

function calculaentrega() {
    let distancia, tempo, seguro, manutencao, oleo, gasolina, lucro, custov, custotempo, total;
    distancia = parseFloat(document.getElementById("edtKM").value)
    tempo = parseFloat(document.getElementById("edtTempo").value)

    seguro = 0.50;
    manutencao = 0.05 * distancia;
    oleo = (0.022 * distancia) * 2;
    gasolina = (0.193 * distancia) * 2;
    lucro = 0.50 * distancia;
    custov = (distancia * 0.022) + (distancia * 0.193);
    if (distancia > 15){
        lucro = 5 + (distancia * 0.75);
    } if (distancia > 22){
        lucro = 7 +(distancia * 0.65);
    } if (distancia >= 50){
        lucro = 10 + (distancia * 0.55);
    } if (tempo >= 20){
        custotempo = 2 + (tempo * 0.17);
    } else if (tempo < 20) {
        custotempo = 2;
    }

    total = seguro + manutencao + oleo + gasolina + lucro + custov + custotempo;

    document.getElementById("resp").innerText = "Com " + distancia +
     " km e " + tempo + " minutos, o valor da corrida será: " + total.toFixed(2);
}
function validar(){
    let valorA = document.validacao.valorA.value;
    let valorB = document.validacao.valorB.value;
    document.getElementById("txtResultado").innerHTML += validador(parseInt(valorA),parseInt(valorB));

}
function validador(a,b){
    let valorC = 5;
    if(a == b){
        valorC = "A e B são iguai\nProtanto a soma dos valores é: " + (parseInt(a) + parseInt(b));
    }else{
        valorC = "A e B são diferentes\nProtanto a multiplicação dos valores é: " + (parseInt(a) * parseInt(b));
    }
    return valorC;
}
function reset(){
    document.validacao.valorA.value = '';
    document.validacao.valorB.value = '';
    document.getElementById("txtResultado").innerHTML = '';
}

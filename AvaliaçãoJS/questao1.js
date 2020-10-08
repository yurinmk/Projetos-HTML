function mediaAritrimetrica(){
    let valor1 = document.media.valor1.value;
    let valor2 = document.media.valor2.value;
    let valor3 = document.media.valor3.value;
    let valores = [parseInt(valor1),parseInt(valor2),parseInt(valor3)]
    function soma(acum,valor){
        return acum + valor
    }
    let media = valores.reduce(soma)/3;
    document.getElementById("txtResultado").innerHTML = media;
}
function reset(){
    document.getElementById("txtResultado").innerHTML = '';
    document.media.valor1.value = '';
    document.media.valor2.value = '';
    document.media.valor3.value = '';
    
}
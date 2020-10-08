function calcular(){

    let selecao = parseInt(document.calc.cod.value);
    let valor1 = parseInt(document.calc.valor1.value);
    let valor2 = parseInt(document.calc.valor2.value);
    let valores = [valor1,valor2];

    switch(selecao){
        case 1:
            document.getElementById("resultado").innerHTML = valores.reduce(somar);
            break;
        case 2:
            document.getElementById("resultado").innerHTML = valores.reduce(mult);
            break;
        case 3:
            document.getElementById("resultado").innerHTML = valores.reduce(div);
            break;
        default:
            document.getElementById("resultado").innerHTML = "Cod. Seleção inexistente!";
    }
}

function somar(acm,valor){
    return acm + valor;
}
function mult(acm,valor){
    return acm * valor;
}
function div(acm,valor){
    return acm / valor;
}
function reset(){
    document.getElementById("formCalc").reset();
}
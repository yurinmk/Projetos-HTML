let valor = 0;
let dinheiro = 0;
let prazo3 = 0;
let prazo5 = 0;

function pagar(){
    valor = parseInt(document.compra.valorCompra.value);
    dinheiro = (valor - (valor * 0.05));
    prazo3 = (valor + (valor * 0.10));
    prazo5 = (valor + (valor * 0.20));
    document.compra.aVista.value = dinheiro;
    document.compra.prazo3x.value = prazo3;
    document.compra.prazo5x.value = prazo5;
}
function pagarAVista(){
    document.getElementById("resultado").innerHTML = "Valor da compra: R$: " + valor+"\n"+
    "Valor a vista: R$: " + dinheiro + 
    "\nDesconto de 5% aplicado!";
}
function pagarPrazo3x(){
    document.getElementById("resultado").innerHTML = 
    "Valor do produto: " + valor+"\n"+
    "Valor total a prazo: " + prazo3 + 
    "\n3x de R$: " + (prazo3/3);
}
function pagarPrazo5x(){
    document.getElementById("resultado").innerHTML = 
    "Valor do produto: " + valor+"\n"+
    "Valor total a prazo: " + prazo5 + 
    "\n5x de R$: " + (prazo5/5);
}
function reset(){
    document.getElementById("formCompra").reset();
}




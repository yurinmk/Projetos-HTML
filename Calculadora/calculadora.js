var enterClick = false;
var limpar = false;
function botao(numero){
    if(enterClick == false || limpar == true){
        document.calc.visor1.value += numero;
    }else{
        document.calc.visor2.value += numero;
    }
}

function reseta(){
    document.calc.visor1.value = '';
    document.calc.visor2.value = '';
    limpar = true;
    document.calc.cboperacao.selectedIndex = 0;
}

function enter(){

    var input1 = document.calc.visor1.value;
    var input2 = document.calc.visor2.value;

    if(input1 == ''){
        alert("Você precisa inserir um valor!");
    }else{
        enterClick = true;
        limpar = false;
    }
    if(input1 != '' && input2 != ''){
        var resultado
        if(document.calc.cboperacao.value == ''){
            alert("Selecione uma operação!")
        }else{
            resultado = document.calc.visor1.value + document.calc.cboperacao.value + document.calc.visor2.value
            alert("Resultado: " + eval(resultado))
            document.getElementById("txtHistorico").innerHTML += resultado + "=" + eval(resultado) + "\n";
            reseta();
        }
    }
    
}

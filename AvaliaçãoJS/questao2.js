function aumentaSalario(){
    let nome = document.form.nome.value;
    let salario = document.form.salario.value;
    let aumento = 0.1;
    let salarioFinal = (parseInt(salario) * aumento) + parseInt(salario);
    document.getElementById("txtResultado").innerHTML += "Funcionário: " + nome +"\n"+
    "Salário Anterior: "+ salario + "\n" + 
    "Aumento de: " +(aumento*100) +"%\n" + 
    "Salário Atual: " + salarioFinal;
}
function reset(){
    document.form.nome.value = '';
    document.form.salario.value = '';
    document.getElementById("txtResultado").innerHTML = '';
}
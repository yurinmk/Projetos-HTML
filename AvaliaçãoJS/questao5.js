function verificar(){
    let nome = document.formAluno.nome.value;
    let nota11 = parseInt(document.formAluno.nota1.value);
    let nota22 = parseInt(document.formAluno.nota2.value);
    let nota33 = parseInt(document.formAluno.nota3.value);
    let mediaa = media(nota11,nota22,nota33);
    let saida;
    switch(mediaa>=8){
        case true:
            saida = "Aluno: " + nome + "\nMédia: " + mediaa + "\nAprovado: Sim";
            break;
        case false:
            saida = "Aluno: " + nome + "\nMédia: " + mediaa + "\nAprovado: Não";
            break;
    }
    document.getElementById("txtResultado").innerHTML = saida;
    
}
function media(n1,n2,n3){
    let media = (n1+n2+n3)/3;
    return media;
}
function reset(){
    document.getElementById("formNota").reset();
}

function trocaDisabled () { //Esta função verifica os checkbox's, se um checkbox está ativo (checked) ele altera a propriedade "disabled=true"... Segue comentário abaixo
                            //"Disabled=true" no input relaciona ao checkbox (aba de diluição)
    radio_concentracao_inicial = document.getElementById('radio_concentracao_inicial').checked;
    radio_volume_inicial = document.getElementById('radio_volume_inicial').checked;
    radio_concentracao_final = document.getElementById('radio_concentracao_final').checked;
    radio_volume_final = document.getElementById('radio_volume_final').checked;
    if (radio_concentracao_inicial == true){document.getElementById('concentracao_inicial').disabled=true}
    else {document.getElementById('concentracao_inicial').disabled=false}
    if (radio_volume_inicial==true){document.getElementById('volume_inicial').disabled=true}
    else{document.getElementById('volume_inicial').disabled=false}
    if (radio_concentracao_final==true){document.getElementById('concentracao_final').disabled=true}
    else{document.getElementById('concentracao_final').disabled=false}
    if (radio_volume_final==true){document.getElementById('volume_final').disabled=true}
    else{document.getElementById('volume_final').disabled=false}
}
function variavelSelecionada() { // a função variavelSelecionada retorna uma string que indica qual variavel foi selecionada no checkbox da página de diluição
    //A string retornada corresponde ao id do input que está relacionado com este checkbox (página de diluição)
    radio_concentracao_inicial = document.getElementById('radio_concentracao_inicial').checked;
    radio_volume_inicial = document.getElementById('radio_volume_inicial').checked;
    radio_concentracao_final = document.getElementById('radio_concentracao_final').checked;
    radio_volume_final = document.getElementById('radio_volume_final').checked;
    if (radio_concentracao_inicial == true){valorNaoConhecido = "concentracao_inicial"}     
    else if (radio_volume_inicial == true){valorNaoConhecido = "volume_inicial"}
    else if (radio_concentracao_final == true){valorNaoConhecido = "concentracao_final"}
    else if (radio_volume_final == true){valorNaoConhecido = "volume_final"};
    return valorNaoConhecido;
}
function validacaoNaoTemVirgula(ci,vi,cf,vf){ //a função validacaoNaoTemVirgula, verifica 4 strings e retorna true casa não haja vírgula, se houver, ela emite um alerta
    validacao = false;
    if (ci.indexOf(",") > -1 || vi.indexOf(",") > -1  || cf.indexOf(",") > -1 || vf.indexOf(',') > -1 ){ //Se houver vírgula em alguma dos campos, um alerta é emitido  
        alert('Para casas decimais utilize ponto');
    }
    else {validacao = true;}
    return validacao;
}
function validacaoNumeros(n1,n2,n3){ //verifica se 3 valores são maiores que zero
    validacao = false;
    if (n1 <= 0 || n2 <= 0 || n3 <= 0){
        alert('Digite apenas valores maiores que zero');
    }
    if ( isNaN(n1) || isNaN(n2) || isNaN(n3) ){  //Verifica Se alguns dos valores não é número e emite uma alerta para esse caso
        alert('Digite apenas números')
    }
    else { 
        return true;
    }
}
function diluicao(){
    validacao = false;
    ci = document.getElementById('concentracao_inicial').value;
    vi = document.getElementById('volume_inicial').value;
    cf = document.getElementById('concentracao_final').value;
    vf = document.getElementById('volume_final').value; 
    if (validacaoNaoTemVirgula(ci,vi,cf,vf) == true){ //Se não houver vírgula, as variáveis serão convertidas para o float. Apenas uma delas retornará NaN
        ci = parseFloat(ci);
        vi = parseFloat(vi);
        cf = parseFloat(cf); 
        vf = parseFloat(vf);
    }

    valorNaoConhecido = variavelSelecionada(); //valorNaoConhecido recebe uma string retornada a partir da função
    if (valorNaoConhecido == "concentracao_inicial" && validacaoNumeros(cf,vf,vi) == true){ //Se o valor não conhecido for "concentracao_inicial" ele faz o calculo para isso
        resultado = "A concentração inicial é: " + ((cf*vf)/vi).toFixed(3);
        alert(resultado);
    }
    else if (valorNaoConhecido== "volume_inicial" && validacaoNumeros(cf,vf,ci) == true ){
        resultado = "O volume inicial é: " + ((cf*vf)/ci).toFixed(3);
        alert(resultado);
    }
    else if (valorNaoConhecido == "concentracao_final" && validacaoNumeros(ci,vi,vf)){
        resultado = "A concentracao final é: " + ((ci*vi)/vf).toFixed(3);
        alert(resultado);
    } 
    else if (valorNaoConhecido == "volume_final" && validacaoNumeros(ci,vi,cf)==true){
        resultado = "O volume_final é: " + ((ci*vi)/cf).toFixed(3);
        alert(resultado)
    }   
}

       
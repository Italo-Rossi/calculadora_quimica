function concentracaoComum() {
        validacao = false;
        valor_a = document.getElementById('valor_1').value;
        valor_b = document.getElementById('valor_2').value;
        unidade_massa = document.getElementById('unidade_massa').value;
        unidade_volume = document.getElementById('unidade_volume').value;
        unidades = unidade_massa + '/L'; //a unidade de volume na resposta deve estar sempre em litro;
        
        if (valor_a.indexOf(",") > -1 || valor_b.indexOf(",") > -1 ) { //Verifica se há vírgula em algum dos valores inseridos
            alert("Para casas decimais, utilize ponto")
        }
        else {
            valor_a = parseFloat(valor_a);
            valor_b = parseFloat(valor_b); 
            if ( (valor_b > 0) == false || (valor_a > 0)==false ) {  //Verifica se todos valores são maiores que 0
            alert('Digite apenas valores maiores que zero');  
            }
            else {
                validacao = true;
            }  
        }
        
        if (unidade_volume == 'ml'){ // Se a unidade for ml, o volumen é dividido por 1000
            valor_b = (valor_b / 1000)
        }
        if (validacao == true) {
            resultado = valor_a / valor_b;
            document.getElementById('resultado').innerHTML = (resultado.toFixed(2)) + ' ' +unidades;
        }
}
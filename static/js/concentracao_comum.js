 function concentracaoComum() {
            validacao = false;
            valor_a = document.getElementById('valor_1').value;
            valor_b = document.getElementById('valor_2').value;
            unidade_massa = document.getElementById('unidade_massa').value;
            unidade_volume = document.getElementById('unidade_volume').value;
            unidades = unidade_massa + '/' + unidade_volume;
            
            if (valor_a.indexOf(",") > -1 || valor_b.indexOf(",") > -1 ) {
                alert("Para casas decimais, utilize ponto")
            }
            else {
                valor_a = parseFloat(valor_a);
                valor_b = parseFloat(valor_b);   
            }
            if ( (valor_b > 0) == false || (valor_a > 0)==false ) {  
            //Verificação básica, para ser aprimorada
                alert('Digite apenas valores maiores que zero');  
            }
            else {
                validacao = true;
            }
            if (validacao == true) {
                resultado = valor_a / valor_b;
                document.getElementById('resultado').innerHTML = (resultado.toFixed(2)) + ' ' +unidades;
            }
}

function validacaoNaoTemVirgula(x,y,z){ //a função validacaoNaoTemVirgula, verifica 4 strings e retorna true casa não haja vírgula, se houver, ela emite um alerta
    validacao = false;
    if (x.indexOf(',') > -1 || y.indexOf(",") > -1  || z.indexOf(",") > -1 ){ //Se houver vírgula em alguma dos campos, um alerta é emitido  
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
function conversorKGParaGramas(massaEmKG){
	massaEmKG = massaEmKG * 1000;
	return massaEmKG 
}


function concentracaoMolar(){ //calcula concentração molar, utilizando outras funções
	//Pegando os valores no documento
	validacao = false;
	massaMolar = document.getElementById('massaMolar').value; 
	massaSolucao = document.getElementById('massaSolucao').value;
	unidadeMassa = document.getElementById('unidade_massa').value;
	volume = document.getElementById('volume').value;
	unidade_volume = document.getElementById('unidade_volume').value;

	
	if ( validacaoNumeros(massaSolucao, massaSolucao, volume) || validacaoNaoTemVirgula(massaSolucao, massaSolucao, volume)){  //Se passar da validacao de numeros, os valores são convertidos
		massaMolar = parseFloat(massaMolar);
		massaSolucao = parseFloat(massaSolucao);
		volume = parseFloat(volume);
		validacao = true
	}

	//Calculo
	if (unidade_volume == 'ml'){ //Se o usuário digita em ml, o valor é convertido para litros
		volume = volume / 1000;
	}
	if ( unidadeMassa == 'Kg'){ //Se a unidade selecionada for Kg,  o valor é convertido para g
		massaSolucao *= 1000;
	}
	numero_mols = (massaSolucao / massaMolar) / volume
	unidades = ' mol / L'
	resultado = numero_mols.toFixed(2) + unidades
	alert('O resultado é: ' + resultado)
}

		


var titulo = document.querySelector(".titulo");
		console.log(titulo);
		console.log(titulo.textContent);

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes); // mostra todos os pacientes

for(var i = 0; i < pacientes.length; i++){ // o length é para percorrer toda a lista de pacientes,sem ter que deixar um número fixo para dar manutenção

	var paciente = pacientes[i]; // o código está com paciente no singular e a nossa variável inicial é no plural. Para não ter que alterar todo o código, ligamos uma a outra com esta var

	var tdPeso = paciente.querySelector(".info-peso");
	console.log(tdPeso); // mostra a td (célula da tabela) com o peso dos pacientes

	var peso = tdPeso.textContent;
	console.log(peso); // mostra o peso dos pacientes

	var tdAltura = paciente.querySelector(".info-altura");
	console.log(tdAltura); // mostra a td (célula da tabela) com a altura dos pacientes

	var altura = tdAltura.textContent;
	console.log(altura); // mostra a altura do Paulo dos pacientes

	var tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura);

	if(!pesoEhValido){ // condição para garantir que não colocaremos peso errado
		console.log("Peso inválido!");
		pesoEhValido = false;
		tdImc.textContent = "Peso inválido!";
		/*paciente.style.backgroundColor = "lightCoral"; // hardcode, muda a cor da fonte para vermelho para chamar a atenção para o erro*/
		paciente.classList.add("paciente-invalido"); // boa pratica é alterar estilo no CSS
	}

	if(!alturaEhValida){ // condição para garantir  que não colocaremos altura errada
		console.log("Altura inválida!");
		alturaEhValida = false;
		tdImc.textContent = "Altura inválida!";
		paciente.classList.add("paciente-invalido");
	}

	if(pesoEhValido && alturaEhValida){ // condição que só vai calcular o imc se peso e altura forem válidos
		var imc = calculaImc(peso, altura);
		console.log(imc); //mostra 100 / 2 * 2 => 100 / 4 => 25
		tdImc.textContent = imc;

	}
}

function calculaImc(peso, altura){
	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2); // mostra o imc na tabela;
}

function validaPeso(peso){
	if(peso >= 0 && peso <=500){
		return true;
	} else{
		return false;
	}
}

function validaAltura(altura){
	if(altura >= 0 && altura <= 3.00 ){
		return true;
	} else{
		return false;
	}
}




function calcular () {
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;

    if (document.getElementById('mostrar__esconder').style.display === 'none') {
        document.getElementById('mostrar__esconder').style.display = 'block';
    } else {
        document.getElementById('mostrar__esconder').style.display = 'none';
    }

    var calculoIMC = (peso / (altura * altura)).toFixed(2);
    var escreveIMC = document.querySelector('.IMC');
        if (calculoIMC <= 18.5) {
            escreveIMC.innerHTML = 'IMC: ' + calculoIMC + ' (Abaixo do normal)';
        } else if (calculoIMC > 18.5 && calculoIMC <= 24.9) {
            escreveIMC.innerHTML = 'IMC: ' + calculoIMC + ' (Normal)';
        } else if (calculoIMC > 24.9 && calculoIMC <= 29.9) {
            escreveIMC.innerHTML = 'IMC: ' + calculoIMC + ' (Sobrepeso)';
        } else if (calculoIMC > 29.9 && calculoIMC <= 34.9) {
            escreveIMC.innerHTML = 'IMC: ' + calculoIMC + ' (Obesidade grau 1)';
        } else if (calculoIMC > 34.9 && calculoIMC <= 39.9) {
            escreveIMC.innerHTML = 'IMC: ' + calculoIMC + ' (Obesidade grau 2)';
        } else if (calculoIMC > 39.9) {
            escreveIMC.innerHTML = 'IMC: ' + calculoIMC + ' (Obesidade grau 3)';
        }
    
    var pesoPerfeito = (altura*altura*24.9).toFixed(2);
    var pesoDivididoPor3 = (peso - pesoPerfeito) / 3;

    var pesoIdeal = document.querySelector('.peso__ideal');
    var ganharPerder = (pesoPerfeito - peso).toFixed(2);
        pesoIdeal.innerHTML = 'Faixa de peso ideal: '  + (altura*altura*18.6).toFixed(2) + ' KG ' + '(IMC: 18.6) ' + ' - ' + '' + (altura*altura*24.9).toFixed(2) + ' KG ' + '(IMC: 24.9)';
    var pesoPerder = document.querySelector('.peso__perder');
        if (ganharPerder < 0) {
            pesoPerder.innerHTML = 'Peso a ganhar/ perder: você deve perder ' + ganharPerder + ' KG' + ' (para IMC: 24.9)';
        } else if (ganharPerder > 0) {
            pesoPerder.innerHTML = 'Peso a ganhar/ perder: você deve ganhar ' + ganharPerder + ' KG' + ' (para IMC: 24.9)';
        }

    var etapasTitulo = document.querySelector('.etapas__titulo');
        etapasTitulo.innerHTML = 'Etapas de perda de peso';

    var textoPeso = document.querySelector('.texto__peso');
        textoPeso.innerHTML = 'Peso (KG)' + ' -';
    var textoIMC = document.querySelector('.texto__imc');
        textoIMC.innerHTML = 'IMC';

    var textoValorPeso1 = document.querySelector('.texto__valor__peso1');
        textoValorPeso1.innerHTML = (peso - pesoDivididoPor3).toFixed(2) + ' -';
    var textoValorIMC1 = document.querySelector('.texto__valor__imc1');
        textoValorIMC1.innerHTML = ((peso - pesoDivididoPor3)/(altura*altura)).toFixed(2);

    var textoValorPeso2 = document.querySelector('.texto__valor__peso2');
        textoValorPeso2.innerHTML = (peso - pesoDivididoPor3*2).toFixed(2) + ' -';
    var textoValorIMC2 = document.querySelector('.texto__valor__imc2');
        textoValorIMC2.innerHTML = ((peso - pesoDivididoPor3*2)/(altura*altura)).toFixed(2);

    var textoValorPeso3 = document.querySelector('.texto__valor__peso3');
        textoValorPeso3.innerHTML = (peso - pesoDivididoPor3*3).toFixed(2) + ' -';
    var textoValorIMC3 = document.querySelector('.texto__valor__imc3');
        textoValorIMC3.innerHTML = ((peso - pesoDivididoPor3*3)/(altura*altura)).toFixed(2);
}

function porSemanas() {
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var numeroDeSemanas = document.getElementById('objetivo__semana').value;
    var pesoPerfeito = (altura*altura*24.9).toFixed(2);
    var perdaSemana = ((pesoPerfeito - peso)/numeroDeSemanas).toFixed(2);
    var rodapeTextoSegundo = document.querySelector('.rodape__texto__segundo');

    if (perdaSemana < 0) {
        rodapeTextoSegundo.innerHTML = 'Você deve perder ' + perdaSemana +  'KG por semana';
    } else if (perdaSemana > 0) {
        rodapeTextoSegundo.innerHTML = 'Você deve ganhar ' + perdaSemana +  'KG por semana';
    }    
}
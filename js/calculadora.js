const body = document.querySelector('body');
body.style.height = '100vh';
body.style.width = '100%';
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.overflow = 'hidden';

const backgroundCalculadora = document.createElement('div');
backgroundCalculadora.style.backgroundColor = '#000';
backgroundCalculadora.style.height = '500px';
backgroundCalculadora.style.width = '312.5px';
backgroundCalculadora.style.display = 'flex';
backgroundCalculadora.style.flexDirection = 'column';
backgroundCalculadora.style.borderRadius = '15px';

const visor = document.createElement('div');
visor.style.width = '90%';
visor.style.height = '15%';
visor.style.borderRadius = '5px';
visor.style.display = 'flex';
visor.style.justifyContent = 'flex-end';
visor.style.alignItems = 'center';
visor.style.backgroundColor = 'white';
visor.style.margin = '5%';
visor.style.overflow = 'hidden';

const visorTexto = document.createElement('h1');
visorTexto.innerHTML = '0';
visorTexto.style.color = 'white';
visorTexto.style.textAlign = 'right';
visorTexto.style.fontFamily = 'Sans-Serif';
visorTexto.style.fontSize = '60px';
visorTexto.style.color = '#000';
visorTexto.style.margin = '16px 16px 0px 0px';
visorTexto.id = 'visorTexto';

const buttons = document.createElement('div');
buttons.style.height = '80%';
buttons.style.padding = '16px';

class btn {
    constructor(name) {
        this.btn = document.createElement('button');
        this.btn.style.height = '56px';
        this.btn.style.width = '56px';
        this.btn.style.borderRadius = '25%';
        this.btn.style.margin = '7px';
        this.btn.style.cursor = 'pointer';
        this.btn.style.backgroundColor = '#6e6e6e';
        this.btn.style.color = '#fff';
        this.btn.style.fontWeight = 'bold';
        this.btn.style.fontSize = '24px';
        this.btn.textContent = name;
        this.btn.addEventListener('click', () => this.verificar(name));
    }
  
    verificar(name) {
        if (name === '=') {
            this.calcular();
        } else {
            inserir(name);
        }
    }
  
    calcular() {
        const calculo = document.getElementById('visorTexto').innerHTML;
        try {
            const result = eval(calculo);
            document.getElementById('visorTexto').innerHTML = result;
        } catch (error) {
            document.getElementById('visorTexto').innerHTML = 'Erro';
        }
    }
}

const btnAc = new btn('AC');
btnAc.btn.style.backgroundColor = "#a1a1a1";
const btnMaisouMenos = new btn('+/-');
btnMaisouMenos.btn.style.backgroundColor = "#a1a1a1";
const btnPorcentagem = new btn('%');
btnPorcentagem.btn.style.backgroundColor = "#a1a1a1";
const btnDivisao = new btn('/');
btnDivisao.btn.style.backgroundColor = "Orange";
const btn7 = new btn('7');
const btn8 = new btn('8');
const btn9 = new btn('9');
const btnX = new btn('*');
btnX.btn.style.backgroundColor = "Orange";
const btn4 = new btn('4');
const btn5 = new btn('5');
const btn6 = new btn('6');
const btnMenos = new btn('-');
btnMenos.btn.style.backgroundColor = "Orange";
const btn1 = new btn('1');
const btn2 = new btn('2');
const btn3 = new btn('3');
const btnMais = new btn('+');
btnMais.btn.style.backgroundColor = "Orange";
const btn0 = new btn('0');
btn0.btn.style.width = '126px';
btn0.btn.style.borderRadius = '15px';
btn0.btn.style.textAlign = 'center';
const btnVirgula = new btn('.');
const btnIgual = new btn('=');
btnIgual.btn.style.backgroundColor = "Orange";

body.appendChild(backgroundCalculadora);
backgroundCalculadora.append(visor);
visor.append(visorTexto);
backgroundCalculadora.append(buttons);
buttons.append(btnAc.btn, btnMaisouMenos.btn, btnPorcentagem.btn, btnDivisao.btn, btn7.btn, btn8.btn, btn9.btn, btnX.btn, btn4.btn, btn5.btn, btn6.btn, btnMenos.btn, btn1.btn, btn2.btn, btn3.btn, btnMais.btn, btn0.btn, btnVirgula.btn, btnIgual.btn);

function inserir(num) {
    if (num === 'AC') {
        document.getElementById('visorTexto').innerHTML = '0';
    } else if (document.getElementById('visorTexto').innerHTML === '0') {
        document.getElementById('visorTexto').innerHTML = num;
    } else {
        document.getElementById('visorTexto').innerHTML += num;
    }
}

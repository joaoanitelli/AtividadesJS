const dia = document.getElementById('dia');
const diadigito = document.getElementById('diadigito');
const mes = document.getElementById('mes');
const anodigito = document.getElementById('ano');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const data = setInterval(function time() {
    let dateToday = new Date();
    let d = dateToday.getDay();
    let dd = dateToday.getDate();
    let m = dateToday.getMonth();
    let ano = dateToday.getFullYear()

    dia.textContent = tratamento_dia(d);
    diadigito.textContent = dd;
    mes.textContent = tratamento_mes(m);
    anodigito.textContent = ano;
});

function tratamento_dia(d) {
    if (d === 0) {
        return "Domingo";
    } else if (d === 1) {
        return "Segunda-feira";
    } else if (d === 2) {
        return "Terça-feira";
    } else if ( d === 3) {
        return "Quarta-feira";
    } else if (d === 4) {
        return "Quinta-feira";
    } else if (d === 5) {
        return "Sexta-feira";
    } else if (d === 6) {
        return "Sábado";
    }
}

function tratamento_mes(m) {
    if (m === 0) {
        return "janeiro";
    } else if (m === 1) {
        return "fevereiro";
    } else if (m === 2) {
        return "março";
    } else if ( m === 3) {
        return "abril";
    } else if (m === 4) {
        return "maio";
    } else if (m === 5) {
        return "junho";
    } else if (m === 6) {
        return "julho";
    }else if (m === 7) {
        return "agosto";
    } else if ( m === 8) {
        return "setembro";
    } else if (m === 9) {
        return "outubro";
    } else if (m === 10) {
        return "novembro";
    } else if (m === 11) {
        return "dezembro";
    }
}

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    horas.textContent = digitos(hr);
    minutos.textContent = digitos(min);
    segundos.textContent = digitos(sec);
})

function digitos(digito) {
    if(digito < 10) {
        return '0' + digito;
    }else {
        return digito;
    }
}


function verificarTexto() {
    var texto = document.getElementById('texto').value.toLowerCase();
    var caracter = /[^a-z0-9]/g;
    texto = texto.replace(caracter,"");
    var textoInvertido = texto.split("").reverse().join("");
    if (texto === textoInvertido) {
        document.getElementById('resultado-texto').innerHTML = "É um palíndromo!"
    } else {
        document.getElementById('resultado-texto').innerHTML = "Não é um palíndromo!"
    }   
}
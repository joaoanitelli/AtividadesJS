// Atividade 2
const numero = parseInt(prompt("Insira um número"));
let divisores = 0;

function primo() {
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores++;
        }
    }

    if (divisores === 2) {
        alert("É primo!");
    } else {
        alert("Não é primo");
    }
}
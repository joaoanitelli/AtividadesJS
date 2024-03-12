// Atividade 4

function fatorial() {
    const num = prompt("Insira um número:")

    function fatorial(num) {
        if (num < 0) 
            return -1;
        else if (num == 0) 
            return 1;
        else {
            return (num * fatorial(num - 1));
        }
    }
    alert(fatorial(num))
}
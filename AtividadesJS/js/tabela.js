var lista = [];

function adicionar() {
    var nome = document.getElementById('nome').value;
    lista.push(nome);
    ordenarLista();
    atualizarTabela();
    document.getElementById('nome').value = '';
}

function ordenarLista() {
    lista.sort(); //
}

function atualizarTabela() {
    var tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
    tabela.innerHTML = "";
    for (var i = 0; i < lista.length; i++) {
        var linha = tabela.insertRow(i);
        var cellNome = linha.insertCell(0);
        cellNome.innerHTML = lista[i];
    }
}
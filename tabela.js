function adicionar() {
    var nome = document.getElementById('nome').value;
    var tabela = document.getElementById('tabela'); // Correção aqui
    var qtdLinhas = tabela.rows.length;
    var linha = tabela.insertRow(qtdLinhas); // Correção aqui

    var cellNome = linha.insertCell(0);

    cellNome.innerHTML = nome;

    document.getElementById('nome').value = '';
}
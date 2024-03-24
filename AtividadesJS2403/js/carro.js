function Carro(marca, modelo, ano, cor, kilometragem, valorFipe) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.kilometragem = kilometragem;
    this.valorFipe = valorFipe;
  
    this.anosUtilizacao = function() {
      const anoAtual = new Date().getFullYear();
      return anoAtual - this.ano;
    };
  
    this.valorMercado = function() {
      const kmPorAno = this.kilometragem / this.anosUtilizacao();
      if (kmPorAno <= 30000) {
        return this.valorFipe * 1.1;
      } else if (kmPorAno > 30000 && kmPorAno <= 50000) {
        return this.valorFipe;
      } else {
        return this.valorFipe * 0.9;
      }
    };
  }
  
  function submitForm() {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const ano = parseInt(document.getElementById("ano").value);
    const cor = document.getElementById("cor").value;
    const kilometragem = parseInt(document.getElementById("kilometragem").value);
    const valorFipe = parseInt(document.getElementById("valorFipe").value);
  
    const carro = new Carro(marca, modelo, ano, cor, kilometragem, valorFipe);
  
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Anos de utilização: ${carro.anosUtilizacao()}<br>`;
    resultElement.innerHTML += `Valor de mercado: R$ ${carro.valorMercado().toFixed(2)}`;
  }
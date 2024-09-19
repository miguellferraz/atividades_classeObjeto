function carro (marca, modelo, ano) {
    this.marca = marca,
    this.modelo = modelo,
    this.ano = ano
}

const bora = new carro ("Volkswagen", "Bora", "2008")
bora.cor = "Preto"
bora.rodas = "Porsche Cayenne aro 19"

console.log("Eu desejo possuir um", bora.marca, bora.modelo, bora.ano, bora.cor, "com rodas de", bora.rodas)


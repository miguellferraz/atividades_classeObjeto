function retangulo (largura, altura) {
    this.largura = largura,
    this.altura = altura
}

const calculaArea = new retangulo (4, 8)

console.log("A área do Retângulo é", calculaArea.largura*calculaArea.altura, "m2")
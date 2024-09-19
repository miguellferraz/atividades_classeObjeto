function calculadora (A, B, C) {
    this.A = A,
    this.B = B,
    this.C = C
}
const soma = new calculadora (10, 20, 30)

console.log("A + B + C =", soma.A+soma.B+soma.C)
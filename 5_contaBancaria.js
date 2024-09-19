function contaBancaria (titular, saldo) {
    this.titular = titular,
    this.saldo = saldo,
    this.depositar = function (valor) {
        saldo = saldo + valor
        console.log ("Deposito de R$", valor, "Realizado com Sucesso!")
        console.log ("Saldo atual: R$", saldo)
        return saldo
    }
    
    this.sacar = function(valor) {
        if (saldo < valor) {
            console.log("Não foi possivel realizar o Saque de R$", valor, "- Saldo Insuficiente")
            console.log ("Saldo atual: R$", saldo)
            return
        } else {
            console.log("Saque de R$", valor, "Realizado com Sucesso!")
        }
        saldo = saldo - valor
        console.log ("Saldo atual: R$", saldo)
        return saldo
    }
}
const cliente1 = new contaBancaria ("Miguel Ferraz", 3500) 

cliente1.depositar(800) 
cliente1.sacar(4000)

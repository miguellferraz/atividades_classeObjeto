function pessoa (nome, profissao, idade) {
    this.nome = nome,
    this.profissao = profissao,
    this.idade = idade
}

const miguel = new pessoa ("Miguel Ferraz", "Programador", "18")

console.log("Meu nome é", miguel.nome, "Tenho", miguel.idade, "anos e trabalho como", miguel.profissao)
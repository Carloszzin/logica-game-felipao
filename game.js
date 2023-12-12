//Fiz e melhorei o desafio passado pelo Felipe Aguiar da Dio.me
class Hero {
    constructor(nome,idade,tipo){
      this.Nome = nome
      this.Idade = idade
      this.Tipo = tipo
    }

    atacar(){
      let tipoHeroi = prompt("Qual seu tipo de herói? Guerreiro / Mago / Monge / Ninja")
      this.Tipo = tipoHeroi;

      if(tipoHeroi === "Guerreiro"){
        alert(`O ${this.Tipo} chamado: ${this.Nome} (de ${this.Idade} anos) atacou usando espada!`)
      }else if(tipoHeroi === "Mago"){
        alert(`O ${this.Tipo} chamado: ${this.Nome} (de ${this.Idade} anos) atacou usando magia!`)
      }else if(tipoHeroi === "Monge"){
        alert(`O ${this.Tipo} chamado: ${this.Nome} (de ${this.Idade} anos) atacou usando artes marciais!`)
      }else if(tipoHeroi === "Ninja"){
        alert(`O ${this.Tipo} chamado: ${this.Nome} (de ${this.Idade} anos) atacou usando shuriken!`)
      }else{
        alert("Deu errado.")
      }

    }
  }

  //Coloque seu nome e idade no objeto.
  let game = new Hero(" ", )
  game.atacar()
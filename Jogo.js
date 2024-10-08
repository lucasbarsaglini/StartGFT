// Definindo a classe Heroi
class Heroi {
    // Construtor da classe que recebe nome, idade e tipo
    constructor(nome, idade, tipo) {
      this.nome = nome;  // Nome do herói
      this.idade = idade;  // Idade do herói
      this.tipo = tipo;  // Tipo do herói (guerreiro, mago, monge, ninja)
    }
  
    // Método atacar que exibe a mensagem de ataque
    atacar() {
      let ataque;
  
      // Definindo o ataque com base no tipo do herói
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'realizou um ataque básico';
      }
  
      // Exibindo a mensagem de ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
  }
  
  // Exemplo de utilização da classe Heroi
  
  // Criando heróis de diferentes tipos
  const heroi1 = new Heroi('Gandalf', 1000, 'mago');
  const heroi2 = new Heroi('Conan', 35, 'guerreiro');
  const heroi3 = new Heroi('Shaolin', 40, 'monge');
  const heroi4 = new Heroi('Naruto', 17, 'ninja');
  
  // Chamando o método atacar para cada herói
  heroi1.atacar();  // O mago atacou usando magia.
  heroi2.atacar();  // O guerreiro atacou usando espada.
  heroi3.atacar();  // O monge atacou usando artes marciais.
  heroi4.atacar();  // O ninja atacou usando shuriken.
  
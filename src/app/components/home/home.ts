import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  nomeProduto: string = "Curso de Angular";
  anuncio: string = "O " + this.nomeProduto + " está em promoção";
  idProduto: number = 123;
  precoProduto: number = 2.59;
  promocao: boolean = true;


  testeVariaveis(): void {
    console.log(`Nome Produto: ${this.nomeProduto}`);
    console.log(`${this.anuncio} está em promoção`);
    console.log(`ID: ${this.idProduto}`);
    console.log(`Preço: ${this.precoProduto}`);
    console.log(`Promoção: ${this.promocao}`);


    // escopo de variaveis dentro do código 
    var variavel1;
    let variavel2;
    const constante3 = 3;

    // var
    var idade = 10;

    function imprimeIdade() {
      var idade = 50;
      console.log("Minha idade é: ", idade);
    }
    imprimeIdade();

    //let
    function imprimeIdade2() {
      for (let idade = 30; idade <= 40; idade++) {
        console.log(`Idade dentro do for: ${idade}`)
      }
      console.log(`Idade fora do for: ${idade}`)
    }
    imprimeIdade2();

    let a = 5;
    var b = 10;
    if (a = 5) {
      let a = 4;
      let b = 1;
      console.log('Variável a dentro do if: ', a);
      console.log('Variável b dentro do if: ', b);
    }
    console.log('Variável a fora do if: ', a);
    console.log('Variável b fora do if: ', b);
  }

}

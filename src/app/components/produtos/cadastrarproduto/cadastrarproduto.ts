import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrarproduto',
  standalone: false,
  templateUrl: './cadastrarproduto.html',
  styleUrl: './cadastrarproduto.css',
})
export class Cadastrarproduto {
  nome: string = "";
  validade: string = "";
  preco: number = 0.00;

  salvarProduto():void{
    console.log("Nome:", this.nome);
    console.log("Validade", this.validade);
    console.log("Preço", this.preco);
    alert("Salvo com sucesso!");
  }
}

import { Component } from '@angular/core';

// Interface para garantir a tipagem correta do produto
export interface Produto {
  id: number;
  nome: string;
  valor: number;
  validade: string;
  promocao?: boolean;
}

@Component({
  selector: 'app-listarprodutos',
  standalone: false,
  templateUrl: './listarprodutos.html',
  styleUrl: './listarprodutos.css',
})
export class Listarprodutos {
  listaString: string[] = ["Primeiro", "Segundo", "Terceiro"];
  listaNumeros: number[] = [15, 15.18, 100];
  
  objetoModelo = {
    nome: "Pedro Américo",
    idade: 16,
    altura: 1.72,
    graduado: false
  };

  listaProduto: Produto[] = [
    { id: 1, nome: "Curso de Angular", valor: 35.56, validade: "2021-12-31" },
    { id: 2, nome: "Curso de Ionic", valor: 50.00, validade: "2021-12-31", promocao: true },
    { id: 3, nome: "Curso de Ionic Avançado", valor: 60.00, validade: "2021-12-31" }
  ];

  constructor() {
    for (const item of this.listaString) {
      console.log(item);
    }

    for (const item of this.listaNumeros) {
      console.log(item);
    }

    console.log(this.objetoModelo);
    console.log(this.objetoModelo.nome);
  }
}
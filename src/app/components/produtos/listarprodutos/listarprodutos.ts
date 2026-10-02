import { Component } from '@angular/core';
import { validate } from '@angular/forms/signals';

@Component({
  selector: 'app-listarprodutos',
  standalone: false,
  templateUrl: './listarprodutos.html',
  styleUrl: './listarprodutos.css',
})
export class Listarprodutos {
  listaString: string[] = ["Primeiro", "Segundo", "Terceiro"];
  listaNumeros: number[] = [15, 15.18, 100]
  objetoModelo = {
    nome: "Pedro Américo",
    idade: 16,
    altura: 1.72,
    graduado: false
  };
  listaProduto: any[] = [
    {
      nome: "Curso de Angular", precoProduto: 35.56, validade: "2021-12-31", id: 1
    },
    {
      nome: "Curso de Ionic", precoProduto: 50, validade: "2021-12-31", id: 2, promocao: true
    },
    {
      id: 3, nome: "Curso de Ionic Avançado", precoProduto: 60, validade: "2021-12-31"
    }

  ];

  constructor() {

    for (let item of this.listaString) {
      console.log(item);
    }

    for (const item of this.listaNumeros) {
      console.log(item);
    }

    console.log(this.objetoModelo);
    console.log(this.objetoModelo.nome);

  }


}

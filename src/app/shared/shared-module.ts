import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProduto } from './components/card-produto/card-produto';



@NgModule({
  declarations: [
    CardProduto
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardProduto
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Listarprodutos } from './components/produtos/listarprodutos/listarprodutos';
import { Cadastrarproduto } from './components/produtos/cadastrarproduto/cadastrarproduto';

const routes: Routes = [
  {path: '', component:Home},
  {path: 'produtos', component:Listarprodutos},
  {path: 'produtos/cadastrar', component:Cadastrarproduto}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
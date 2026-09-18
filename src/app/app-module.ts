import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './template/header/header';
import { Footer } from './template/footer/footer';
import { Home } from './components/home/home';
import { Listarprodutos } from './components/produtos/listarprodutos/listarprodutos';
import { Cadastrarproduto } from './components/produtos/cadastrarproduto/cadastrarproduto';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Home,
    Listarprodutos,
    Cadastrarproduto
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { FormsModule } from '@angular/forms';
import { MinhaListaDeTarefasComponent } from './minha-lista-de-tarefas/minha-lista-de-tarefas.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TitleComponent, FormsModule, MinhaListaDeTarefasComponent], 
  template: `
  {{valor}}
  <app-title *ngIf="ExibirComponente" [title]="novotitulo"></app-title>
  <div *ngIf="exibirbotoes">
  <button (click)="somar()">somar</button>
  <button (click)="exibirmensagem()">Exibir Mensagem</button>
  <button (click)="voltartexto()">Voltar Texto Original</button>
  </div>
  <br><br>
  <input [(ngModel)]="novotitulo"/>
  <br>
  <button (click)="AlternarExibirbotoes()">Alternar botoes</button>
  <br><hr><br>
  <app-minha-lista-de-tarefas></app-minha-lista-de-tarefas>
  <router-outlet></router-outlet>`
})

export class AppComponent implements OnInit {

  

   public ExibirComponente: boolean=true;
   
   public exibirbotoes: boolean=true;

   public novotitulo:string ="Novo Titulo Linx";

   public valor:number = 1;

   public somar(): void{
    this.valor += 1;  
   } 

   public exibirmensagem(){
    alert('Essa e minha mensagem'); 
   } 

   public voltartexto(){
    this.novotitulo = "Novo Titulo Linx"
   }
   
   public AlternarExibirbotoes(){
    this.exibirbotoes = !this.exibirbotoes
   }
    
   constructor(){} 

   ngOnInit(): void
   {}


}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-minha-lista-de-tarefas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './minha-lista-de-tarefas.component.html',
  styleUrl: './minha-lista-de-tarefas.component.css'
})
export class MinhaListaDeTarefasComponent {
     public listadetarefas: string[] = ["Estudar Angular", "Limpar Quarto","Ler Livro"];

     public adicionaritem(){
       this.listadetarefas.push("Nova Tarefa Adicionada");
     }

     public removeritem(index: number){
       this.listadetarefas.splice(index, 1);
     }

}

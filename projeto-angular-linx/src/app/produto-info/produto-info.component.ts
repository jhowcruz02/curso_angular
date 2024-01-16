import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto-info.component.html',
  styleUrl: './produto-info.component.css'
})
export class ProdutoInfoComponent {
   
     public categoriaselecionada: string='Eletronicos';

     public alterarcategoria(novacategoria: string){
       this.categoriaselecionada = novacategoria;
     }
     
     public destaque: boolean = false;
     public tamanhogrande: boolean = false;

     public AlterarDestaque(){
     this.destaque = !this.destaque;
     }

     public AlterarTamanho(){
      this.tamanhogrande = !this.tamanhogrande;
      }
     
     public EstiloPadrao: any = {
        'font-size': '16px',
        'color': 'black',
        'background-color': 'gray'
      }; 

     
      public EstiloRealce: any={
        'font-size': '25px',
        'color': 'red',
        'background-color': 'lightgray'
      }
      
      Estilo:any = this.EstiloPadrao;
      RealceAtivo: boolean = false; 

     public AlternarEstilo(){
        this.RealceAtivo = !this.RealceAtivo;
        this.Estilo = this.RealceAtivo ? this.EstiloRealce : this.EstiloPadrao;
     } 



}

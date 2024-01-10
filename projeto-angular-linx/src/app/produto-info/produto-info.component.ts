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

   
}

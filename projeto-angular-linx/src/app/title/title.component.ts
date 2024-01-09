import { Component, Input, OnChanges} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnChanges {
  @Input() public title:string = "Curso Angular Linx"; 

  public cordefundo: string = "red";
    
   ngOnChanges(): void {
      console.log("Valor Alterado");
    }

}



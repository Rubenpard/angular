import { Component, Input } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { opacidad, slideInAnimation } from 'src/assets/slide-in.animation';

@Component({
  selector: 'datospersonales',
  templateUrl: './datospersonales.component.html',
  styleUrls: ['./datospersonales.component.css'],
  animations: [slideInAnimation, opacidad], 
})
export class DatospersonalesComponent {

  @Input() menu!: MenuComponent;

  

}

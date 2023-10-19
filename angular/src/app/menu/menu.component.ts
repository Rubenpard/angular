import { Component } from '@angular/core';
import { slideInAnimation} from 'src/assets/slide-in.animation';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [slideInAnimation],
})
export class MenuComponent {

  mostrarDatospersonales = false;

  toggleDatospersonales() {
    this.mostrarDatospersonales = !this.mostrarDatospersonales;
  }

  cerrarDatospersonales() {
    this.mostrarDatospersonales = false;
  }
  animacionActiva = false;

  activarAnimacion() {
    this.animacionActiva = !this.animacionActiva;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'animacion',
  templateUrl: './animacion.component.html',
  styleUrls: ['./animacion.component.css']
})
export class AnimacionComponent {

  condicion1: boolean = true;
  condicion2: boolean = false;
  condicion3: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.condicion1 = false;
      this.condicion2 = true;
    }, 5000); // Después de 2 segundos, condicion1 se establecerá en false y condicion2 en true

    setTimeout(() => {
      this.condicion2 = false;
      this.condicion3 = true;
    }, 8000); // Después de 5 segundos, condicion2 se establecerá en false y condicion3 en true
  }


    animacionActiva = false;

  activarAnimacion() {
    this.animacionActiva = !this.animacionActiva;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent {

  contenidoSeleccionado: number = 0;

  cargarContenido(numero: number) {
    this.contenidoSeleccionado = numero;
  }

}

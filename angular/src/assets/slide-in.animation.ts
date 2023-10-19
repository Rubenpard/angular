import { trigger, style, animate, transition } from '@angular/animations';

export const slideInAnimation = trigger('slideIn', [
  transition(':enter', [
    style({ transform: 'translateY(100%)' }),
    animate('1s', style({ transform: 'translateY(0)' }))
  ]),
  transition(':leave', [
    animate('1s', style({ transform: 'translateY(100%)' }))
  ])
]);

export const opacidad = trigger('opacidad', [ // Cambia el nombre a "opacidad"
  transition(':enter', [
    style({ opacity: 0 }), // Establece la opacidad inicial en 0
    animate('3s', style({ opacity: 1 })) // Anima la opacidad a 0.5 en 1 segundo
  ]),
  transition(':leave', [
    animate('1s', style({ opacity: 0 })) // Anima la opacidad a 0 en 1 segundo al salir
  ])
]);
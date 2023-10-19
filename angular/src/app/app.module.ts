import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AnimacionComponent } from './animacion/animacion.component';
import { DatospersonalesComponent } from './datospersonales/datospersonales.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SueloComponent } from './suelo/suelo.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { AnimacionExperienciaComponent } from './animacion-experiencia/animacion-experiencia.component';
import { CalleComponent } from './calle/calle.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AnimacionComponent,
    DatospersonalesComponent,
    SueloComponent,
    ExperienciaLaboralComponent,
    AnimacionExperienciaComponent,
    CalleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

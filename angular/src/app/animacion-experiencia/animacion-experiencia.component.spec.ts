import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacionExperienciaComponent } from './animacion-experiencia.component';

describe('AnimacionExperienciaComponent', () => {
  let component: AnimacionExperienciaComponent;
  let fixture: ComponentFixture<AnimacionExperienciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimacionExperienciaComponent]
    });
    fixture = TestBed.createComponent(AnimacionExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

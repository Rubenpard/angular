import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ExperienciaLaboralComponent } from '../experiencia-laboral/experiencia-laboral.component';


describe('ExperienciaLaboralComponent', () => {
  let component: ExperienciaLaboralComponent;
  let fixture: ComponentFixture<ExperienciaLaboralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienciaLaboralComponent]
    });
    fixture = TestBed.createComponent(ExperienciaLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalleComponent } from './calle.component';

describe('CalleComponent', () => {
  let component: CalleComponent;
  let fixture: ComponentFixture<CalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalleComponent]
    });
    fixture = TestBed.createComponent(CalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

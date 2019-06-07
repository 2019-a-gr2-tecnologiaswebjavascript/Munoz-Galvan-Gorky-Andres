import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEntrenadorComponent } from './gestion-entrenador.component';

describe('GestionEntrenadorComponent', () => {
  let component: GestionEntrenadorComponent;
  let fixture: ComponentFixture<GestionEntrenadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionEntrenadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearEntrenadorPage } from './modal-crear-entrenador.page';

describe('ModalCrearEntrenadorPage', () => {
  let component: ModalCrearEntrenadorPage;
  let fixture: ComponentFixture<ModalCrearEntrenadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCrearEntrenadorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCrearEntrenadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

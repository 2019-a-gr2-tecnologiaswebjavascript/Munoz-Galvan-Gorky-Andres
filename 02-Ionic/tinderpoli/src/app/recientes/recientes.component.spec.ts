import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecientesComponent } from './recientes.component';

describe('RecientesComponent', () => {
  let component: RecientesComponent;
  let fixture: ComponentFixture<RecientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecientesComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

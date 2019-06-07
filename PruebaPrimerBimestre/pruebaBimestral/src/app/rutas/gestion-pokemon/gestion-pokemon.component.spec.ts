import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPokemonComponent } from './gestion-pokemon.component';

describe('GestionPokemonComponent', () => {
  let component: GestionPokemonComponent;
  let fixture: ComponentFixture<GestionPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

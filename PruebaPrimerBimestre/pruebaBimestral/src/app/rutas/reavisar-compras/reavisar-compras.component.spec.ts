import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReavisarComprasComponent } from './reavisar-compras.component';

describe('ReavisarComprasComponent', () => {
  let component: ReavisarComprasComponent;
  let fixture: ComponentFixture<ReavisarComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReavisarComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReavisarComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

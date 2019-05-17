import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recientes',
  templateUrl: './recientes.component.html',
  styleUrls: ['./recientes.component.scss'],
})
export class RecientesComponent implements OnInit {

  @Input()
  recienteNombre;

  @Input()
  recienteImagen;

  @Input()
  recienteArtista;


  constructor() { }

  ngOnInit() {}

}

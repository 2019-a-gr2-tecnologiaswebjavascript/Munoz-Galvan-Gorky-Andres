import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {



  
  arregloEscuchadoRecientemente = [
    {
      titulo:"Vuelve a...",
      arregloDatos: [
          {
            imagen: "../../assets/sangrefria.jpg",
            nombre: "Sangre Fría",
            artistas: "Álbum de Pxndx"
          },
          {
            imagen: "../../assets/thestrokes.jpg",
            nombre: "The Strokes",
          },
          {
            imagen: "../../assets/hurryupweredreaming.jpg",
            nombre: "Hurry up, We're Dreaming",
            artistas: "Álbum de M83"
          },
          {
            imagen: "../../assets/thestage.jpg",
            nombre: "The Stage",
            artistas: "Álbum de Avenged Sevenfold"
          }
      ]
    },
    {
      titulo:"Tu música de uso intensivo",
      descripcion:"La música que has repetido este mes",
      arregloDatos: [
          {
            imagen: "../../assets/sangrefria.jpg",
            nombre: "Sangre Fría",
            artistas: "Álbum de Pxndx"
          },
          {
            imagen: "../../assets/thestrokes.jpg",
            nombre: "The Strokes",
          },
          {
            imagen: "../../assets/hurryupweredreaming.jpg",
            nombre: "Hurry up, We're Dreaming",
            artistas: "Álbum de M83"
          },
          {
            imagen: "../../assets/thestage.jpg",
            nombre: "The Stage",
            artistas: "Álbum de Avenged Sevenfold"
          }
      ]
    },
    {
      titulo:"Volver a lo que te ha gustado",
      descripcion:"Lo que más has escuchado los últimos meses",
      arregloDatos: [
          {
            imagen: "../../assets/sangrefria.jpg",
            nombre: "Sangre Fría",
            artistas: "Álbum de Pxndx"
          }
      ]
    }
  ]


  constructor() { }

  ngOnInit() {}

}

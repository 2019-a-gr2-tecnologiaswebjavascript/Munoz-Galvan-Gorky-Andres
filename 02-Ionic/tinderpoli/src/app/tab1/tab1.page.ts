import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  arregloInfo = [
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
            artistas: "Artista"
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
    }
  ]


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  title = 'Tu biblioteca';

  arregloOpciones = [
    {
      icono: "sunny",
      nombre: "Especialmente para ti"
    },
    {
      icono: "musical-notes",
      nombre: "Playlist"
    },
    {
      icono: "radio",
      nombre: "Emisoras"
    },
    {
      icono: "musical-note",
      nombre: "Canciones"
    },
    {
      icono: "radio-button-on",
      nombre: "Álbumes"
    },{
      icono: "contact",
      nombre: "Artistas"
    },{
      icono: "cellular",
      nombre: "Podcasts"
    },{
      icono: "videocam",
      nombre: "Vídeos"
    },
  ]

  arregloEscuchadoRecientemente = [
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
    },
    {
      imagen: "../../assets/thestagedeluxe.jpg",
      nombre: "The Stage (Deluxe Edition)",
      artistas: "Álbum de Avenged Sevenfold"
    },
    {
      imagen: "../../assets/thestagedeluxe.jpg",
      nombre: "The Stage (Deluxe Edition)",
      artistas: "Álbum de Avenged Sevenfold"
    },    
    {
      imagen: "../../assets/avengedsevenfold.jpg",
      nombre: "Dear God",
      artistas: "Canción de Avenged Sevenfold"
    },
  ]
}

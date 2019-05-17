import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  arregloMasEscuchados = [
    {
      nombreTitulo: "Tus generos más escuchados",
      arreglo: [
        {
          imagen: "../../assets/sangrefria.jpg",
          nombre: "Rock",
          color: "blue"
        },
        {
          imagen: "../../assets/thestrokes.jpg",
          nombre: "Alternativo",
          color: "red"
        },
        {
          imagen: "../../assets/sangrefria.jpg",
          nombre: "Latina",
          color: "orange"
        },
        {
          imagen: "../../assets/sangrefria.jpg",
          nombre: "Pop",
          color: "yellow"
        }
      ]
    },
    {
      nombreTitulo: "Explorar todo",
      arreglo: [
        {
          imagen: "../../assets/sangrefria.jpg",
          nombre: "Podcasts",
        },
        {
          imagen: "../../assets/thestrokes.jpg",
          nombre: "Especialmente para ti"
        },
        {
          imagen: "../../assets/sangrefria.jpg",
          nombre: "Listas de éxitos"
        },
        {
          imagen: "../../assets/sangrefria.jpg",
          nombre: "Novedades"
        },
        {
          imagen: "../../assets/sangrefria.jpg",
          nombre: "Radio"
        },
        {
          imagen: "../../assets/sangrefria.jpg",
          nombre: "Videos"
        },
        {
          imagen: "../../assets/sangrefria.jpg",
          nombre: "Descubrir"
        },
        {
          imagen: "../../assets/sangrefria.jpg",
          nombre: "Conciertos"
        }
      ]

    }
  ]
}

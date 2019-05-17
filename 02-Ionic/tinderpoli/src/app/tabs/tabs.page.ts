import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  arregloTabs = [
    {
      ruta:"tab1",
      titulo:"Inicio",
      icono:"home"
    },
    {
      ruta:"tab2",
      titulo:"Buscar",
      icono:"search"
    },
    {
      ruta:"tab3",
      titulo:"Tu biblioteca",
      icono:"funnel"
  	},
  ]
}

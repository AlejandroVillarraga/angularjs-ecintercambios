import { Component, OnInit } from '@angular/core';
import { PrestamoService } from '../../services/prestamo.service';

import { Prestamo } from '../../models/prestamo';

@Component({
  selector: 'app-solicitud-page',
  templateUrl: './solicitud-page.component.html',
  styleUrls: ['./solicitud-page.component.css']
})
export class SolicitudPageComponent implements OnInit {

  private misSolicitudes: Prestamo[] = [];
  private misObjetosPrestados: Prestamo[] = [];

  constructor(public prestamoService: PrestamoService) { }


  ngOnInit() {

    window.scroll(0,0)

    this.prestamoService.getMisObjetosPrestados().subscribe(prestamoResponse=>{
       this.misObjetosPrestados = prestamoResponse;
        console.log(this.misObjetosPrestados);

        this.prestamoService.getMisSolicitudes().subscribe(prestamoResponse=>{
           this.misSolicitudes = prestamoResponse;
            console.log(this.misSolicitudes);
        })

    })





  }

}

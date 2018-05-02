import { Component, OnInit } from '@angular/core';
import { PrestamoService } from '../../services/prestamo.service';
import { Router } from '@angular/router';
import { Prestamo } from '../../models/prestamo';

@Component({
  selector: 'app-solicitud-page',
  templateUrl: './solicitud-page.component.html',
  styleUrls: ['./solicitud-page.component.css']
})
export class SolicitudPageComponent implements OnInit {

  private misSolicitudes: Prestamo[] = [];
  private misObjetosPrestados: Prestamo[] = [];
  private prestamoTemp: Prestamo;

  constructor(public prestamoService: PrestamoService,
                public router: Router){

    }


  ngOnInit() {

    window.scroll(0,0)

    this.prestamoService.getMisObjetosPrestados().subscribe(prestamoResponse=>{
       this.misObjetosPrestados = prestamoResponse;

        this.prestamoService.getMisSolicitudes().subscribe(prestamoResponse=>{
           this.misSolicitudes = prestamoResponse;
        })

    })

  }


    aprobarPrestamo(id: string){

        this.prestamoService.aprobarPrestamo(id).subscribe(prestamoResponse=>{
           this.prestamoTemp = prestamoResponse;
            this.router.navigate(['/solicitud']);
        })

    }

}

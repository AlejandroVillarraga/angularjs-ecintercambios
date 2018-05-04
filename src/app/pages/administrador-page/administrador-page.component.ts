import { Component, OnInit } from '@angular/core';
import { PrestamoService } from '../../services/prestamo.service';
import { Router } from '@angular/router';
import { Prestamo } from '../../models/prestamo';


@Component({
  selector: 'app-administrador-page',
  templateUrl: './administrador-page.component.html',
  styleUrls: ['./administrador-page.component.css']
})
export class AdministradorPageComponent implements OnInit {

  private solicitudes: Prestamo[] = [];
  private prestamoTemp: Prestamo;

  constructor(public prestamoService: PrestamoService,
                public router: Router) { }

  ngOnInit() {
        window.scroll(0,0)
        this.prestamoService.getAllPrestamos().subscribe(prestamoResponse=>{
           this.solicitudes = prestamoResponse;
        })
  }

    aprobarPrestamo(id: string){

        this.prestamoService.aprobarPrestamo(id).subscribe(prestamoResponse=>{
           this.prestamoTemp = prestamoResponse;
            this.router.navigate(['/solicitud']);
        })

    }

}

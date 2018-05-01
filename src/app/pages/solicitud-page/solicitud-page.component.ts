import { Component, OnInit } from '@angular/core';
import { ObjetoOfrecidoService } from '../../services/objetoOfrecido.service';
import { ObjetoOfrecido } from '../../models/objetoOfrecido';

import { HorariosDisponiblesService } from '../../services/horariosDisponibles.service';
import { HorariosDisponibles } from '../../models/horariosDisponibles';

@Component({
  selector: 'app-solicitud-page',
  templateUrl: './solicitud-page.component.html',
  styleUrls: ['./solicitud-page.component.css']
})
export class SolicitudPageComponent implements OnInit {

    private objetoId:string;
    private horarioId:string;
    private objetoActual: ObjetoOfrecido;
    private horarioDActual: HorariosDisponibles;

  constructor(public objetoOfrecidoService: ObjetoOfrecidoService,
                public horariosDisponiblesService: HorariosDisponiblesService) { }


  ngOnInit() {
    window.scroll(0,0)
    this.objetoId = sessionStorage.getItem("objetoSolicitadoId");
    this.horarioId = sessionStorage.getItem("horarioSolicitadoId");

    this.objetoOfrecidoService.getObjetoOfrecido(this.objetoId).subscribe(objetoResponse => {
            this.objetoActual=objetoResponse;
      }, error => {

      })

    this.horariosDisponiblesService.getHorarioById(this.horarioId).subscribe(horarioResponse => {
            this.horarioDActual=horarioResponse;
      }, error => {

      })
  }

}

import { Injectable } from '@angular/core';

//Importaciones nuevas
import { Http } from '@angular/http';
import { APIService } from '.././common/api.service';
import { AppConfiguration } from '.././common/config/app-configuration.service';
import { AuthService } from '.././common/auth.service';
import {ObjetoOfrecido} from '.././models/objetoOfrecido';
import {Prestamo} from '.././models/prestamo';

import {HorariosDisponibles} from '.././models/horariosDisponibles';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ObjetoOfrecidoService extends APIService {

private resourceUrl: string = 'objetosOfrecidos/';

constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) {
    super(config, authService, http);
  }

  getObjetosOfrecidos(): Observable<ObjetoOfrecido[]> {
    return this.get(this.resourceUrl+"getAll");
  }

  getObjetosOfrecidosByName(name: string): Observable<ObjetoOfrecido[]> {
    var data = sessionStorage.getItem("currentUser");
    if(data=="-1"){
        return this.get(this.resourceUrl+"byName/"+name);
    }
    else{
        return this.get(this.resourceUrl+"byNameLogeado/"+name+"/"+data+".");
    }

  }

  addHorarioDisponible(hd: HorariosDisponibles){
    return this.post(this.resourceUrl+"agregarHorario", hd);
  }

  getObjetoOfrecido(id: string): Observable<ObjetoOfrecido> {
    return this.get(this.resourceUrl+"getById/"+id);
  }

  savePrestamo(prestamo: Prestamo):  Observable<Prestamo>{
    return this.post("prestamo/savePrestamo",prestamo);
  }









}
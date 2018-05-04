import { Injectable } from '@angular/core';

//Importaciones nuevas
import { Http } from '@angular/http';
import { APIService } from '.././common/api.service';
import { AppConfiguration } from '.././common/config/app-configuration.service';
import { AuthService } from '.././common/auth.service';
import {Objeto} from '.././models/objeto';
import {Prestamo} from '.././models/prestamo';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PrestamoService extends APIService {

private resourceUrl: string = 'prestamo/';

constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) {
    super(config, authService, http);
  }

  getMisSolicitudes(): Observable<Prestamo[]> {
    var data = sessionStorage.getItem("currentUser")+"@mail.escuelaing.edu.co.";
    return this.get(this.resourceUrl+"getMisSolicitudes/"+data);
  }

  getMisObjetosPrestados(): Observable<Prestamo[]> {
    var data = sessionStorage.getItem("currentUser")+"@mail.escuelaing.edu.co.";
    return this.get(this.resourceUrl+"getMisObjetosPrestados/"+data);
  }

  getAllPrestamos(): Observable<Prestamo[]> {
    return this.get(this.resourceUrl+"getAll");
  }


  aprobarPrestamo(id: string): Observable<Prestamo> {
    return this.post(this.resourceUrl+"aprobarPrestamo/"+id, id);
  }



}
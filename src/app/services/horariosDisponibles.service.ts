import { Injectable } from '@angular/core';

//Importaciones nuevas
import { Http } from '@angular/http';
import { APIService } from '.././common/api.service';
import { AppConfiguration } from '.././common/config/app-configuration.service';
import { AuthService } from '.././common/auth.service';
import {HorariosDisponibles} from '.././models/horariosDisponibles';
import {ObjetoOfrecido} from '.././models/objetoOfrecido';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HorariosDisponiblesService extends APIService {

private resourceUrl: string = 'horariosDisponibles/';

constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) {
    super(config, authService, http);
  }

  getHorarioById(id: string): Observable<HorariosDisponibles> {
    return this.get(this.resourceUrl+"getById/"+id);
  }

}
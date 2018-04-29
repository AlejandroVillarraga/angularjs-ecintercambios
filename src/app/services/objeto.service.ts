import { Injectable } from '@angular/core';

//Importaciones nuevas
import { Http } from '@angular/http';
import { APIService } from '.././common/api.service';
import { AppConfiguration } from '.././common/config/app-configuration.service';
import { AuthService } from '.././common/auth.service';
import {Objeto} from '.././models/objeto';
import {ObjetoOfrecido} from '.././models/objetoOfrecido';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ObjetoService extends APIService {

private resourceUrl: string = 'objeto/';

constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) {
    super(config, authService, http);
  }

  getObjetos(): Observable<Objeto[]> {

    return this.get(this.resourceUrl+"getAll");
  }

  getObjeto(name: string): Observable<Objeto> {
    return this.get(this.resourceUrl+name);
  }

  registrarObjetoOfrecido(objetoOfrecido: ObjetoOfrecido){
    return this.post("objetosOfrecidos/registrarObjetoOfrecido", objetoOfrecido);
  }

}
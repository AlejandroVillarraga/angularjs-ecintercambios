import { Injectable } from '@angular/core';

//Importaciones nuevas
import { Http } from '@angular/http';
import { APIService } from '.././common/api.service';
import { AppConfiguration } from '.././common/config/app-configuration.service';
import { AuthService } from '.././common/auth.service';
import { User } from '.././models/user';
import { Calificacion } from '.././models/calificacion';

import { ObjetoOfrecido } from '.././models/objetoOfrecido';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UsersService extends APIService {
constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) {
    super(config, authService, http);
  }

  login(username: string, password: string) {
    return this.post('user/login', { username, password }, { credentials: false }).map(loginResponse => {
      if (loginResponse) {
        this.authService.accessToken = loginResponse.accessToken;
      }
    });
  }

  signUp(email: string, password: string, name: string, username: string, genero: string, celular:number){
    return this.post("user/signup", new User(email, password, name, username, genero, celular));
  }

  getUserByEmail(): Observable<User> {
    var data = sessionStorage.getItem("currentUser")+"@mail.escuelaing.edu.co.";
    return this.get("user/byEmail/"+data);
  }

  getUser(email: string): Observable<User> {
    return this.get("user/byEmail/"+email);
  }

  addObjetoOfrecido(obf: ObjetoOfrecido): Observable<ObjetoOfrecido> {
    var data = sessionStorage.getItem("currentUser")+"@mail.escuelaing.edu.co.";
    return this.post("user/addObjetoOfrecido/"+data,obf);

  }

  setCalification(cal: Calificacion): Observable<Calificacion> {
    return this.post("calificacion/addCalificacion",cal);

    }



}
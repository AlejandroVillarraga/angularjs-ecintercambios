import { Component, OnInit } from '@angular/core';
import { ObjetoOfrecidoService } from '../../services/objetoOfrecido.service';
import { ObjetoOfrecido } from '../../models/objetoOfrecido';

import { HorariosDisponiblesService } from '../../services/horariosDisponibles.service';
import { HorariosDisponibles } from '../../models/horariosDisponibles';
import { AuthService } from '../../common/auth.service';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { Prestamo } from '../../models/prestamo';


@Component({
  selector: 'app-prestadores-page',
  templateUrl: './prestadores-page.component.html',
  styleUrls: ['./prestadores-page.component.css']
})
export class PrestadoresPageComponent implements OnInit {

  private objetosOfrecidosList: ObjetoOfrecido[] = [];
  private errorText: string;

    private objetoId:string;
    private horarioId:string;
    private objetoActual: ObjetoOfrecido;
    private horarioDActual: HorariosDisponibles;
    private solicitante: User;
    private prestador: User;

  constructor(public objetoOfrecidoService: ObjetoOfrecidoService,
                public authService: AuthService,
                public horariosDisponiblesService: HorariosDisponiblesService,
                public usersService: UsersService) { }

  ngOnInit() {
    window.scroll(0,0)
    var data = sessionStorage.getItem("categoryName");
    this.objetoOfrecidoService.getObjetosOfrecidosByName(data).subscribe(objetoResponse=>{
        console.log(objetoResponse);
        console.log(data);
       this.objetosOfrecidosList = objetoResponse;
        if(this.objetosOfrecidosList.length==0){
            this.errorText = "Lo sentimos !!!! No se ha registrado ningin "+data+".";
        }
        else{
            this.errorText = "";
        }
    })
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  saveData(data1: string, data2: string, prestadorEmail: string){
    sessionStorage.setItem("objetoSolicitadoId", data1);
    sessionStorage.setItem("horarioSolicitadoId", data2);

    var emailUser = sessionStorage.getItem("currentUser")+"@mail.escuelaing.edu.co.";
    console.log(sessionStorage.getItem("currentUser")+" AQIOOOO" );
    this.usersService.getUser(emailUser).subscribe(userResponse => {
                    console.log("entro aqui");
                    this.solicitante=userResponse;
                    console.log(this.solicitante);

                    this.usersService.getUser(prestadorEmail+".").subscribe(userResponse => {
                                    this.prestador=userResponse;
                                    console.log(this.prestador);

                                    this.objetoOfrecidoService.getObjetoOfrecido(data1).subscribe(objetoResponse => {
                                            this.objetoActual=objetoResponse;
                                            console.log(this.objetoActual);


                                            this.horariosDisponiblesService.getHorarioById(data2).subscribe(horarioResponse => {
                                                    this.horarioDActual=horarioResponse;
                                                    console.log(this.horarioDActual);

                                                    var prestamo= new Prestamo(this.prestador, this.solicitante, false, this.objetoActual, this.horarioDActual);
                                                    console.log(prestamo);


                                                    this.objetoOfrecidoService.savePrestamo(prestamo).subscribe(prestamoResponse => {

                                                            console.log("Se registro el prestamo");


                                                      }, error => {
                                                             console.log("FALLOOOOO");
                                                                        ;
                                                      })

                                              }, error => {

                                              })


                                      }, error => {

                                      })

                              }, error => {

                              })

              }, error => {

              })











  }



}

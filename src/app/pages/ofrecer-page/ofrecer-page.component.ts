import { Component, OnInit } from '@angular/core';
import { ObjetoService } from '../../services/objeto.service';
import { Objeto } from '../../models/objeto'
import { User } from '../../models/user';

import { HorariosDisponibles } from '../../models/horariosDisponibles';
import { ObjetoOfrecido } from '../../models/objetoOfrecido';
import { ObjetoOfrecidoService } from '../../services/objetoOfrecido.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-ofrecer-page',
  templateUrl: './ofrecer-page.component.html',
  styleUrls: ['./ofrecer-page.component.css']
})
export class OfrecerPageComponent implements OnInit {
    public signUpForm: FormGroup;
    private userTemp: User;
    private objetoTemp: Objeto;
    private objetoList: Objeto[] = [];
    private objeto: string;
    private dia1: string;
    private hora_inicio1: string;
    private hora_fin1: string;

    private dia2: string;
    private hora_inicio2: string;
    private hora_fin2: string;

    private dia3: string;
    private hora_inicio3: string;
    private hora_fin3: string;

    private textBoton: string;
    private textError: string;





  constructor(public objetoService: ObjetoService,
                public objetoOfrecidoService: ObjetoOfrecidoService,
                public formBuilder:FormBuilder,
                public router: Router,
                public usersService: UsersService) {
      this.signUpForm = new FormGroup({
        descripcion: new FormControl(),
        precio: new FormControl(),
    });
  }


  ofrecerObjeto(){
    this.textError = "";
    this.textBoton = "Registrando objeto, espera un momento ...";
    this.usersService.getUserByEmail().subscribe(userResponse => {
        this.userTemp = userResponse;
        this.objetoService.getObjeto(this.objeto).subscribe(objetoResponse=>{
            this.objetoTemp = objetoResponse;
            var obf: ObjetoOfrecido;
            obf = new ObjetoOfrecido(this.userTemp, this.objetoTemp, this.signUpForm.get('descripcion').value, this.signUpForm.get('precio').value);


            if(this.dia1==null || this.hora_inicio1==null || this.hora_fin1==null){
                this.textBoton = "Ofrecer Objeto";
                this.textError = "Debes registrar almenos un horario completo";
            }
            else{

            this.usersService.addObjetoOfrecido(obf).subscribe(objetoResponse=>{
                obf = objetoResponse;
                this.router.navigate(['objetos']);
                this.objetoOfrecidoService.addHorarioDisponible(new HorariosDisponibles(this.dia1,this.hora_inicio1,this.hora_fin1)).subscribe(objetoResponse=>{
                })
                this.objetoOfrecidoService.addHorarioDisponible(new HorariosDisponibles(this.dia2,this.hora_inicio2,this.hora_fin2)).subscribe(objetoResponse=>{
                })
                this.objetoOfrecidoService.addHorarioDisponible(new HorariosDisponibles(this.dia3,this.hora_inicio3,this.hora_fin3)).subscribe(objetoResponse=>{

                })
        })

            }





        })
      }, error => {

      })


  }


  ngOnInit() {
    window.scroll(0,0)
    this.textBoton = "Ofrecer Objeto";
    this.objetoService.getObjetos().subscribe(objetoResponse=>{
       this.objetoList = objetoResponse;
    })
  }

  saveObjeto(objeto: string){
    this.objeto=objeto;
  }

  saveDia(dia1: string){
    this.dia1=dia1;
  }

  saveHoraInicio(hora_inicio1: string){
    this.hora_inicio1=hora_inicio1;
  }

  saveHoraFin(hora_fin1: string){
    this.hora_fin1=hora_fin1;
  }
  saveDia2(dia2: string){
    this.dia2=dia2;
  }

  saveHoraInicio2(hora_inicio2: string){
    this.hora_inicio2=hora_inicio2;
  }

  saveHoraFin2(hora_fin2: string){
    this.hora_fin2=hora_fin2;
  }
  saveDia3(dia3: string){
    this.dia3=dia3;
  }

  saveHoraInicio3(hora_inicio3: string){
    this.hora_inicio3=hora_inicio3;
  }

  saveHoraFin3(hora_fin3: string){
    this.hora_fin3=hora_fin3;
  }

}

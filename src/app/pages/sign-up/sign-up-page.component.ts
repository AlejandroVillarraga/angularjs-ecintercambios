import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})

export class SignUpPageComponent implements OnInit {
    public signUpForm: FormGroup;
    public genero: string;
    public error: string;
    public loader: string;


  constructor(public formBuilder:FormBuilder,public usersService: UsersService,public router: Router) {
    this.signUpForm = new FormGroup({
        name: new FormControl(),
        username: new FormControl(),
        email: new FormControl(),
        celphone: new FormControl(),
        password: new FormControl(),

    });

  }

  signUp() {
    this.error="";
    this.loader="Cargando ...";
    this.usersService.getUser(this.signUpForm.get('email').value+"@mail.escuelaing.edu.co.").subscribe(loginResponse => {

                        this.error="Este Email ya esta registrado en el sistema.";
                        this.loader="Registrate";
                }, error => {

                   this.usersService.signUp(
                      this.signUpForm.get('email').value+"@mail.escuelaing.edu.co",
                      this.signUpForm.get('password').value,
                      this.signUpForm.get('name').value,
                      this.signUpForm.get('email').value,
                      this.genero,
                      this.signUpForm.get('celphone').value).subscribe(loginResponse => {
                        this.usersService.login(
                             this.signUpForm.get('email').value+"@mail.escuelaing.edu.co",
                             this.signUpForm.get('password').value).subscribe(loginResponse => {
                                    sessionStorage.setItem("currentUser", this.signUpForm.get('email').value);
                                    this.router.navigate(['objetos']);
                                }, error => {
                                })

                      }, error => {
                        this.error="Error, verifica que hayas llenado todos los campos obligatorios.";
                        this.loader="Registrate";
                      })




                })





  }

  saveGender(genero: string){
    this.genero=genero;
  }



    ngOnInit() {
        window.scroll(0,0)
        this.error="";
        this.loader="Registrate";


  }
}
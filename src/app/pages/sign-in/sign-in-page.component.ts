import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})



export class SignInPageComponent implements OnInit {
    public signInForm: FormGroup;
    public loginError: string;


  constructor(public formBuilder:FormBuilder,public usersService: UsersService,public router: Router) {
    this.signInForm = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
    });

  }

  doLogin() {
    sessionStorage.setItem("currentUser", this.signInForm.get('email').value);

    this.loginError="";
    this.usersService.login(
      this.signInForm.get('email').value+"@mail.escuelaing.edu.co",
      this.signInForm.get('password').value).subscribe(loginResponse => {
        this.router.navigate(['objetos']);
      }, error => {
        this.loginError = "Error al ingresar, por favor verifica tu correo y contraseña";
      })
  }


    ngOnInit() {
        window.scroll(0,0)
        this.loginError="";
  }
}
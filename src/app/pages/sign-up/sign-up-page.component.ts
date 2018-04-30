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

      })
  }

  saveGender(genero: string){
    this.genero=genero;
  }



    ngOnInit() {
        window.scroll(0,0)

  }
}
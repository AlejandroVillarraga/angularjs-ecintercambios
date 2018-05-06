import { Component, OnInit } from '@angular/core';
import { PrestamoService } from '../../services/prestamo.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Prestamo } from '../../models/prestamo';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { Calificacion } from '../../models/calificacion';

@Component({
  selector: 'app-solicitud-page',
  templateUrl: './solicitud-page.component.html',
  styleUrls: ['./solicitud-page.component.css']
})
export class SolicitudPageComponent implements OnInit {

  private misSolicitudes: Prestamo[] = [];
  private misObjetosPrestados: Prestamo[] = [];
  private prestamoTemp: Prestamo;
    public calificationForm: FormGroup;
    public calificacion: string;
    public userACalificar: User;

  constructor(public formBuilder:FormBuilder, public prestamoService: PrestamoService,
                public router: Router, public usersService: UsersService){
        this.calificationForm = new FormGroup({
            num1: new FormControl(),
            num2: new FormControl(),
            num3: new FormControl(),
            num4: new FormControl(),
            num5: new FormControl()
        });

    }


  ngOnInit() {

    window.scroll(0,0)

    this.prestamoService.getMisObjetosPrestados().subscribe(prestamoResponse=>{
       this.misObjetosPrestados = prestamoResponse;

        this.prestamoService.getMisSolicitudes().subscribe(prestamoResponse=>{
           this.misSolicitudes = prestamoResponse;
        })

    })

  }


    aprobarPrestamo(id: string){

        this.prestamoService.aprobarPrestamo(id).subscribe(prestamoResponse=>{
           this.prestamoTemp = prestamoResponse;
            this.router.navigate(['/solicitud']);
        })

    }

    saveNumber(num: string){
        this.calificacion= num;
    }

    calificar(username: string){

        this.router.navigate(['/home']);
        this.usersService.getUser(username+"@mail.escuelaing.edu.co.").subscribe(userResponse=>{
           this.userACalificar = userResponse;
            var cal = new Calificacion(this.calificacion, this.userACalificar);

                this.usersService.setCalification(cal).subscribe(calResponse=>{


                    this.router.navigate(['/solicitud']);

                })



        })



    }

}

import { Component, OnInit } from '@angular/core';
import { ObjetoOfrecidoService } from '../../services/objetoOfrecido.service';
import { ObjetoOfrecido } from '../../models/objetoOfrecido';
import { AuthService } from '../../common/auth.service';


@Component({
  selector: 'app-prestadores-page',
  templateUrl: './prestadores-page.component.html',
  styleUrls: ['./prestadores-page.component.css']
})
export class PrestadoresPageComponent implements OnInit {

  private objetosOfrecidosList: ObjetoOfrecido[] = [];
  private errorText: string;

  constructor(public ObjetoOfrecidoService: ObjetoOfrecidoService, public authService: AuthService,) { }

  ngOnInit() {
    window.scroll(0,0)
    var data = sessionStorage.getItem("categoryName");
    this.ObjetoOfrecidoService.getObjetosOfrecidosByName(data).subscribe(objetoResponse=>{
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

  saveData(data1: string, data2: string){
    sessionStorage.setItem("objetoSolicitadoId", data1);
    sessionStorage.setItem("horarioSolicitadoId", data2);
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FormGroup, FormBuilder,FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdministradorPageComponent } from './pages/administrador-page/administrador-page.component';

import { OfrecerPageComponent } from './pages/ofrecer-page/ofrecer-page.component';

import { SolicitudPageComponent } from './pages/solicitud-page/solicitud-page.component';

import { ObjetosPageComponent } from './pages/objetos-page/objetos-page.component';

import { PrestadoresPageComponent } from './pages/prestadores-page/prestadores-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


import { PrestamoService } from './services/prestamo.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


//Nuevos imports
import { AppConfiguration } from './common/config/app-configuration.service';
import { INITIAL_CONFIG } from './common/config/initial-config';
import { HttpModule } from '@angular/http';
import { APIService } from './common/api.service';
import { AuthService } from './common/auth.service';
import { AppDataService } from './common/app-data.service';
import { SignInPageComponent } from './pages/sign-in/sign-in-page.component';
import { SignUpPageComponent } from './pages/sign-up/sign-up-page.component';

import { UsersService } from './services/users.service';
import { HorariosDisponiblesService } from './services/horariosDisponibles.service';
import { ObjetoService } from './services/objeto.service';
import { ObjetoOfrecidoService } from './services/objetoOfrecido.service';




const ROUTES = [
{ path: 'signin', component: SignInPageComponent },
{ path: 'home', component: HomePageComponent },
{ path: 'objetos', component: ObjetosPageComponent },
{ path: 'prestadores', component: PrestadoresPageComponent },
{ path: 'signup', component: SignUpPageComponent },
{ path: 'ofrecerObjeto', component: OfrecerPageComponent },
{ path: 'solicitud', component: SolicitudPageComponent },
{ path: 'administrador', component: AdministradorPageComponent },
{path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    SignInPageComponent,
    ObjetosPageComponent,
    PrestadoresPageComponent,
    SignUpPageComponent,
    SolicitudPageComponent,
    OfrecerPageComponent,
    AdministradorPageComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: INITIAL_CONFIG,
      useValue: {
        apiURL: 'https://eciobjects.herokuapp.com'
      }
    },
    AppConfiguration,
    APIService,
    AuthService,
    AppDataService,
    UsersService,
    ObjetoService,
    ObjetoOfrecidoService,
    HorariosDisponiblesService,
    PrestamoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

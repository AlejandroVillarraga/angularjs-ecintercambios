import { User } from './user';
import { Objeto } from './objeto';
import { ObjetoOfrecido } from './objetoOfrecido';
import { HorariosDisponibles } from './horariosDisponibles';

export class Prestamo {

private prestador: User;
private solicitante: User;
private aceptado: boolean;
private objetoOfrecido: ObjetoOfrecido;
private horariosDisponibles: HorariosDisponibles;


constructor(prestador: User, solicitante: User, aceptado: boolean, objetoOfrecido: ObjetoOfrecido, horariosDisponibles: HorariosDisponibles) {
        this.prestador=prestador;
        this.solicitante=solicitante;
        this.aceptado=aceptado;
        this.objetoOfrecido=objetoOfrecido;
        this.horariosDisponibles=horariosDisponibles;
    }
}



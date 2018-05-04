import { User } from './user';

export class Calificacion {
    private calificacion: string;
    private user: User;
constructor(calificacion:string, user:User) {

        this.calificacion=calificacion;
        this.user=user;
    }
}



import { User } from './user';
import { Objeto } from './objeto';

export class ObjetoOfrecido {

    private user: User;
    private objeto_ofrecido: Objeto;
    private descripcion: string;
    private precio: number;


constructor(user: User, objeto_ofrecido: Objeto, descripcion: string, precio: number) {
        this.user=user;
        this.objeto_ofrecido=objeto_ofrecido;
        this.descripcion=descripcion;
        this.precio=precio;
    }
}



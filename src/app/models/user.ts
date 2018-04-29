export class User {


    private email: string;
    private password: string;
    private name: string;
    private username: string;
    private genero: string;
    private celular: number;

    constructor(email: string, password:string, name:string, username: string,
                genero:string, celular:number) {
        this.email=email;
        this.password=password;
        this.name=name;
        this.username=username;
        this.genero=genero;
        this.celular=celular;
    }
}



import { ObjetoOfrecido } from './objetoOfrecido';

export class HorariosDisponibles {
    private dia: string;
    private hora_inicio: string;
    private hora_fin: string;
    private objetoOfrecido: ObjetoOfrecido;

constructor(dia: string, hora_inicio:string, hora_fin:string) {
        this.dia=dia;
        this.hora_inicio=hora_inicio;
        this.hora_fin=hora_fin;
    }

}



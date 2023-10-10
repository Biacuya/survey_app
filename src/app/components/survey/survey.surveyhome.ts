import { Component } from '@angular/core';

@Component({
    selector: 'my-survey',
    templateUrl: './survey.surveyhome.html'
})

export class MySurvey {
    public tittle: string;
    public comment: string;
    public year: number;
    constructor() {
        this.tittle = "Hola Universo";
        this.comment = "Esto es un comentario";
        this.year = 2023;
        console.log("Componente MySurvey cargado");
    }
} 
import { Component } from '@angular/core';

@Component({
    selector: 'my-survey',
    template: `<h1>Hola Universo, soy survey</h1>
    <p>Este es mi componente</p>`
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
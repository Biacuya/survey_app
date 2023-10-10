import { Component, OnInit } from '@angular/core';
import { Model } from "survey-core";

const surveyJson = {
  "title": "¡Bienvenido!",
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "Nombre",
          "isRequired": true,
          "autocomplete": "name"
        },
        {
          "type": "text",
          "name": "Apellido",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "Titulo de la encuesta",
          "isRequired": true
        },
        {
          "type": "checkbox",
          "name": "Componentes de la encuesta",
          "isRequired": true,
          "choices": [
            "Caja de texto",
            "CheckBox",
            "RadioButtons"
          ],
          "choicesOrder": "asc",
          "showSelectAllItem": true,
          "maxSelectedChoices": 10,
          "minSelectedChoices": 1,
          "selectAllText": "Seleccionar Todo"
        },
        {
          "type": "text",
          "name": "Pureba",
          "description": "a"
        }
      ]
    }
  ],
};




@Component({
  selector: 'app-surveyapp',
  templateUrl: './surveyapp.component.html',
  styleUrls: ['./surveyapp.component.css']
})
export class SurveyappComponent implements OnInit {
  surveyModel!: Model;
  ngOnInit() {
    const survey = new Model(surveyJson);
    survey.focusFirstQuestionAutomatic = false;
    this.surveyModel = survey;

  }
}

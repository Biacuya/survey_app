import { Component, OnInit } from '@angular/core';
import { Model } from "survey-core";


const surveyJson = {
  elements: [{
    name: "FirstName",
    title: "Ingresa el tipo de pregunta:",
    type: "text"
  }, {
    name: "LastName",
    title: "Ingresa tu ultimo nombre:",
    type: "text"
  }]
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My First Survey';
  surveyModel: Model = new Model(surveyJson);
  ngOnInit() {
    const survey = new Model(surveyJson);
    this.surveyModel = survey;
  }
}
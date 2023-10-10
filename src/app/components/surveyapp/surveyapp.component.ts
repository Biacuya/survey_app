import { Component, OnInit } from '@angular/core';
import { Model } from "survey-core";

const surveyJson = {
  elements: [{
    name: "FirstName",
    title: "Enter your first name:",
    type: "text"
  }, {
    name: "LastName",
    title: "Enter your last name:",
    type: "text"
  }]
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
    this.surveyModel = survey;
  }
}

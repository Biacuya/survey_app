import {Component, OnInit} from '@angular/core';
import {Model} from "survey-core";

const surveyJson = {
  pages: [{
    name: "PersonalDetails",
    elements: [{
      type: "text",
      name: "FirstName",
      title: "Enter your first name:"
    }, {
      type: "text",
      name: "LastName",
      title: "Enter your last name:"
    }, {
      type: "panel",
      name: "Contacts",
      title: "Contacts (optional)",
      elements: [{
        type: "text",
        name: "GitHub"
      }]
    }]
  }]
};

@Component({
  selector: 'app-my-survey',
  templateUrl: './my-survey.component.html',
  styleUrls: ['./my-survey.component.css']
})

export class MySurveyComponent implements OnInit {
  title = 'LES GO';
  surveyModel!: Model;

  ngOnInit() {
    this.surveyModel = new Model(surveyJson);
  }
}

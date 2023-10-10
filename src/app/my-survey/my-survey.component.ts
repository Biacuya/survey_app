import {Component, OnInit} from '@angular/core';
import {Model} from "survey-core";
import {json} from "./default-survey";

@Component({
  selector: 'app-my-survey',
  templateUrl: './my-survey.component.html',
  styleUrls: ['./my-survey.component.css']
})

export class MySurveyComponent implements OnInit {
  title = 'LES GO';
  model!: Model;

  ngOnInit() {
    const survey = new Model(json);
    // You can delete the line below if you do not use a customized theme
    survey.onComplete.add((sender, options) => {
      console.log(JSON.stringify(sender.data, null, 3));
    });
    this.model = survey;
  }

  onButtonClick(){
    console.log("Button clicked")
    const github = this.model.getQuestionByName("GitHub");
    if (github) {
      github.title = "GitHub username:"
    }

    const panel = this.model.getPanelByName("Contacts");
    if (panel) {
      // Collapse the panel
      panel.state = "collapsed";
    }
    // Add a Telegram question to the panel
    const telegram = panel.addNewQuestion("text", "Telegram");
    telegram.title = "Telegram:"
    
  }
}

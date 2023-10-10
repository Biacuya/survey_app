import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyModule } from "survey-angular-ui";
import { MySurvey } from './components/survey/survey.surveyhome';


@NgModule({
  declarations: [
    AppComponent,
    MySurvey
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, SurveyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

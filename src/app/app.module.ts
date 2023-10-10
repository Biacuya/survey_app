import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyModule } from "survey-angular-ui";
import { MyButtonComponent } from './my-button/my-button.component';
import { MySurveyComponent } from './my-survey/my-survey.component';


@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    MySurveyComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,SurveyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

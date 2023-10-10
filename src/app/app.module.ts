import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyModule } from "survey-angular-ui";
import { MySurvey } from './components/survey/survey.surveyhome';
import { PeliculasComponent } from './components/peliculas/peliculas.component';


@NgModule({
  declarations: [
    AppComponent,
    MySurvey,
    PeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, SurveyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

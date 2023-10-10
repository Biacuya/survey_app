import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySurveyComponent } from './my-survey.component';

describe('MySurveyComponent', () => {
  let component: MySurveyComponent;
  let fixture: ComponentFixture<MySurveyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MySurveyComponent]
    });
    fixture = TestBed.createComponent(MySurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyappComponent } from './surveyapp.component';

describe('SurveyappComponent', () => {
  let component: SurveyappComponent;
  let fixture: ComponentFixture<SurveyappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyappComponent]
    });
    fixture = TestBed.createComponent(SurveyappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerqueryComponent } from './answerquery.component';

describe('AnswerqueryComponent', () => {
  let component: AnswerqueryComponent;
  let fixture: ComponentFixture<AnswerqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerqueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

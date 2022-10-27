import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddqueryComponent } from './addquery.component';

describe('AddqueryComponent', () => {
  let component: AddqueryComponent;
  let fixture: ComponentFixture<AddqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddqueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

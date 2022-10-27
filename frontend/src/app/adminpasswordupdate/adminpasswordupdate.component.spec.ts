import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpasswordupdateComponent } from './adminpasswordupdate.component';

describe('AdminpasswordupdateComponent', () => {
  let component: AdminpasswordupdateComponent;
  let fixture: ComponentFixture<AdminpasswordupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpasswordupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminpasswordupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

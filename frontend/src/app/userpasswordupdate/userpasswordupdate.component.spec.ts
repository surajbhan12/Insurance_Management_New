import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpasswordupdateComponent } from './userpasswordupdate.component';

describe('UserpasswordupdateComponent', () => {
  let component: UserpasswordupdateComponent;
  let fixture: ComponentFixture<UserpasswordupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpasswordupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserpasswordupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSchoolFormComponent } from './create-school-form.component';

describe('CreateSchoolFormComponent', () => {
  let component: CreateSchoolFormComponent;
  let fixture: ComponentFixture<CreateSchoolFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateSchoolFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSchoolFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

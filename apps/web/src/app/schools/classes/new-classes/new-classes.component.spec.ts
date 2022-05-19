import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClassesComponent } from './new-classes.component';

describe('NewClassesComponent', () => {
  let component: NewClassesComponent;
  let fixture: ComponentFixture<NewClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewClassesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

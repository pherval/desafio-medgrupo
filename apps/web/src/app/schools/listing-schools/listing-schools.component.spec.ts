import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingSchoolsComponent } from './listing-schools.component';

describe('ListingSchoolsComponent', () => {
  let component: ListingSchoolsComponent;
  let fixture: ComponentFixture<ListingSchoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListingSchoolsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

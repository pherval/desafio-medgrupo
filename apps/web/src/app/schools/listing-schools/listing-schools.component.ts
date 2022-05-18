import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { type Observable } from 'rxjs';
import { TypeAheadService } from 'src/app/shared/type-ahead.service';
import { School, SchoolsService } from '../schools.service';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-listing-schools',
  templateUrl: './listing-schools.component.html',
  styleUrls: ['./listing-schools.component.scss'],
})
export class ListingSchoolsComponent implements OnInit {
  schools$?: Observable<School[]>;
  filtered$?: Observable<School[]>;
  faPlus = faPlus;
  faGraducationCap = faGraduationCap;

  constructor(
    private schoolsService: SchoolsService,
    private typeAhead: TypeAheadService<School>
  ) {}

  ngOnInit(): void {
    this.schools$ = this.schoolsService.all();
    this.filtered$ = this.typeAhead.filter(
      this.schools$,
      (keyword, school) => school.name.search(new RegExp(keyword, 'ig')) !== -1
    );
  }

  filter(keyword: string) {
    this.typeAhead.type(keyword);
  }
}

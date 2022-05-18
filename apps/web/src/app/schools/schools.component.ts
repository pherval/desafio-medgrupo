import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { type Observable } from 'rxjs';
import { TypeAheadService } from '../shared/type-ahead.service';
import { type School, SchoolsService } from './schools.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss'],
})
export class SchoolsComponent implements OnInit {
  schools$?: Observable<School[]>;
  filtered$?: Observable<School[]>;
  faPlus = faPlus;

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

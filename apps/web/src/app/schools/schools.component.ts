import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  filter,
  from,
  map,
  Subject,
  switchMap,
  tap,
  type Observable,
} from 'rxjs';
import { TypeAheadService } from '../shared/type-ahead.service';
import { type School, SchoolsService } from './schools.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss'],
})
export class SchoolsComponent implements OnInit {
  schools$?: Observable<School[]>;
  typeahead$: Subject<string>;
  filtered$?: Observable<School[]>;

  constructor(
    private schoolsService: SchoolsService,
    private typeAhead: TypeAheadService<School>
  ) {
    this.typeahead$ = new BehaviorSubject<string>('');
  }

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

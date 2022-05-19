import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { map, Observable, switchMap } from 'rxjs';
import { type Classes, ClassesService } from './classes.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
})
export class ClassesComponent implements OnInit {
  classes$?: Observable<Classes[]>;
  schoolId$?: Observable<number>;

  faPlus = faPlus;

  constructor(private route: ActivatedRoute, private classes: ClassesService) {}

  ngOnInit(): void {
    this.schoolId$ = this.route?.parent?.parent?.params?.pipe(
      map(({ id }) => id)
    );

    this.classes$ = this.schoolId$?.pipe(
      switchMap((id) => this.classes.all(id))
    );
  }
}

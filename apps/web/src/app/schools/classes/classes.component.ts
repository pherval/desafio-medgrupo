import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { type Classes, ClassesService } from './classes.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
})
export class ClassesComponent implements OnInit {
  classes$?: Observable<Classes[]>;

  constructor(private route: ActivatedRoute, private classes: ClassesService) {}

  ngOnInit(): void {
    this.classes$ = this.route?.parent?.parent?.params?.pipe(
      switchMap(({ id }) => this.classes.all(id))
    );
  }
}

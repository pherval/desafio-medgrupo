import { Component, type OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { type Observable, switchMap } from 'rxjs';
import { School, SchoolsService } from '../schools.service';

@Component({
  selector: 'app-show-school',
  templateUrl: './show-school.component.html',
  styleUrls: ['./show-school.component.scss'],
})
export class ShowSchoolComponent implements OnInit {
  school$?: Observable<School>;
  faGraduationCap = faGraduationCap;

  constructor(private route: ActivatedRoute, private schools: SchoolsService) {}

  ngOnInit(): void {
    this.school$ = this.route.params.pipe(
      switchMap(({ id }) => this.schools.get(id))
    );
  }
}

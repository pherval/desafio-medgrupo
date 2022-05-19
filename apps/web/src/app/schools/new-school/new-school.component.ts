import { Component, OnDestroy } from '@angular/core';
import { Subscription, type Observable } from 'rxjs';
import { type School, SchoolsService } from '../schools.service';

@Component({
  selector: 'app-new-school',
  templateUrl: './new-school.component.html',
  styleUrls: ['./new-school.component.scss'],
})
export class NewSchoolComponent implements OnDestroy {
  private saveObs?: Subscription;

  constructor(private schoolService: SchoolsService) {}

  save(school: School) {
    this.saveObs = this.schoolService.save(school).subscribe(
      (school) => {
        console.warn('successfully saved', school);
      },
      (error) => console.error('error savind', error)
    );
  }

  ngOnDestroy() {
    this.saveObs?.unsubscribe();
  }
}

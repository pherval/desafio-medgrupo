import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, type Observable } from 'rxjs';
import { SnackbarService } from 'src/app/snackbar.service';
import { type School, SchoolsService } from '../schools.service';

@Component({
  selector: 'app-new-school',
  templateUrl: './new-school.component.html',
  styleUrls: ['./new-school.component.scss'],
})
export class NewSchoolComponent implements OnDestroy {
  private saveObs?: Subscription;

  constructor(
    private schoolService: SchoolsService,
    private snackbar: SnackbarService,
    private router: Router
  ) {}

  save(school: School) {
    this.saveObs = this.schoolService.save(school).subscribe(
      (school) => {
        this.router.navigate(['/escolas']);
        this.snackbar.open({ message: 'escola salva com sucesso' });
      },
      (error) =>
        this.snackbar.open({
          message:
            'Erro inesperado. Não foi possível salvar a escola. Tente Novamente',
        })
    );
  }

  ngOnDestroy() {
    this.saveObs?.unsubscribe();
  }
}

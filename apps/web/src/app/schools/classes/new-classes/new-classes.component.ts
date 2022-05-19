import { Component, type OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { SnackbarService } from 'src/app/snackbar.service';
import { Classes, ClassesService } from '../classes.service';

@Component({
  selector: 'app-new-classes',
  templateUrl: './new-classes.component.html',
  styleUrls: ['./new-classes.component.scss'],
})
export class NewClassesComponent implements OnDestroy {
  classes?: Classes;
  saveSubscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private classesService: ClassesService,
    private snackbar: SnackbarService,
    private router: Router
  ) {}

  get schoolId$() {
    return this.route.parent?.parent?.params.pipe(map(({ id }) => id));
  }

  save(schoolId: number, classes: Classes) {
    this.saveSubscription = this.classesService
      .save(schoolId, classes)
      .subscribe({
        complete: () => {
          this.router.navigate(['/escolas', schoolId, 'turmas']);
          this.snackbar.open({ message: 'turma cadastrada com sucesso' });
        },

        error: () => {
          this.classes = classes;
          this.snackbar.open({ message: 'Algo inesperado ocorreu' });
        },
      });
  }

  ngOnDestroy(): void {
    this.saveSubscription?.unsubscribe();
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, type FormGroup } from '@angular/forms';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { SnackbarService } from 'src/app/snackbar.service';
import { Classes } from '../classes.service';

@Component({
  selector: 'app-classes-form',
  templateUrl: './classes-form.component.html',
  styleUrls: ['./classes-form.component.scss'],
})
export class ClassesFormComponent {
  @Input() schoolId!: number;
  @Input() classes?: Classes;
  @Output() save: EventEmitter<Classes>;

  form: FormGroup;

  faUsers = faUsers;

  constructor(private fb: FormBuilder, private snackbar: SnackbarService) {
    this.save = new EventEmitter();

    this.form = this.fb.group({
      students: [0],
    });
  }

  handleSubmit(e: Event) {
    e.preventDefault();

    if (this.form.invalid) {
      this.snackbar.open({ message: 'dados inválidos' });
    } else {
      this.save.emit({ ...this.form.value });
      this.form.reset();
    }
  }
}

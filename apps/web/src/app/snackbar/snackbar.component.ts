import { Component } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
  faClose = faClose;

  constructor(private snackbar: SnackbarService) {}

  close() {
    this.snackbar.close();
  }
}

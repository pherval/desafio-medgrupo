import { Component, type OnInit } from '@angular/core';
import { faGraduationCap, faHouse } from '@fortawesome/free-solid-svg-icons';
import { type Observable } from 'rxjs';
import { type SnackbarMessage, SnackbarService } from './snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'web';
  faGraduationCap = faGraduationCap;
  faHouse = faHouse;

  menu = [
    {
      label: 'Página Inicial',
      icon: faHouse,
      path: '/',
      routerLinkActiveOptions: { exact: true },
    },
    {
      label: 'Escolas',
      icon: faGraduationCap,
      path: '/escolas',
    },
  ];

  open$?: Observable<boolean>;
  message$?: Observable<[boolean, SnackbarMessage]>;

  constructor(private snackbar: SnackbarService) {}

  ngOnInit() {
    this.open$ = this.snackbar.isOpen$;
    this.message$ = this.snackbar.message$;
  }
}

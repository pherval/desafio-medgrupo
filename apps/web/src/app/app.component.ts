import { Component } from '@angular/core';
import { faGraduationCap, faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
}

import { Component, Input } from '@angular/core';
import { type RouterLinkActive } from '@angular/router';
import { type IconDefinition } from '@fortawesome/free-solid-svg-icons';

type MenuItem = {
  icon: IconDefinition;
  label: string;
  path: string | string[];
  routerLinkActiveOptions?: RouterLinkActive['routerLinkActiveOptions'];
};

type Menu = MenuItem[];

@Component({
  selector: 'app-menu',
  template: `
    <nav class="flex flex-col items-center items-stretch text-slate-50">
      <app-menu-item
        *ngFor="let item of menu"
        [icon]="item.icon"
        [routerLink]="item.path"
        [routerLinkActiveOptions]="item.routerLinkActiveOptions"
      >
        {{ item.label }}
      </app-menu-item>
    </nav>
  `,
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() menu: Menu = [];
}

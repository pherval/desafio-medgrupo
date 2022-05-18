import { Component, Input, OnInit } from '@angular/core';
import { type RouterLinkActive } from '@angular/router';
import { type IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
  @Input() icon?: IconDefinition;
  @Input()
  routerLinkActiveOptions?: RouterLinkActive['routerLinkActiveOptions'];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-schools',
  template: `
    <section class="p-5 bg-indigo-50 h-full">
      <router-outlet></router-outlet>
    </section>
  `,
})
export class SchoolsComponent {}

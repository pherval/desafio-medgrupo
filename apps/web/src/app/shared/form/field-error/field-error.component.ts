import { Component } from '@angular/core';

@Component({
  selector: 'app-field-error',
  template: `<div class="text-red-500"><ng-content></ng-content></div>`,
  styles: [],
})
export class FieldErrorComponent {}

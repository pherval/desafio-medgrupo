import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appInputAdornment]',
})
export class InputAdornmentDirective {
  @Input('appInputAdornment') direction?: 'left' | 'right' = 'right';
}

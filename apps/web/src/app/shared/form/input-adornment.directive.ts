import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appInputAdornment]',
})
export class InputAdornmentDirective {
  @Input('appInputAdornment') direction?: 'left' | 'right' = 'right';

  @HostBinding('class') get classes() {
    return 'text-slate-500';
  }
}

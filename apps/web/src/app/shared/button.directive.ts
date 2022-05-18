import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appButton]',
})
export class ButtonDirective {
  @Input() theme: keyof typeof this.themes = 'primary';

  @HostBinding('class') get className() {
    return [
      'py-2 px-4 flex flex-row gap-3 items-center cursor-pointer',
      this.themes[this.theme ?? 'primary'],
    ].join(' ');
  }

  private themes = {
    primary: 'bg-sky-600 text-gray-50',
    outlined: 'text-slate-700 border border-slate-700',
  };
}

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
  @Input() theme?: 'primary';

  constructor(private el: ElementRef) {}

  @HostBinding('class') get className() {
    return [
      'py-2 px-4 flex flex-row gap-3 items-center cursor-pointer',
      this.themes[this.theme ?? 'primary'],
    ].join(' ');
  }

  private get themes() {
    return {
      primary: 'bg-sky-600 text-gray-50',
    };
  }
}

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
  @Input() disabled: boolean = false;

  @HostBinding('class') get className() {
    return [
      'py-2 px-4 flex flex-row gap-3 items-center cursor-pointer rounded transition duration-100',
      this.themes[this.theme ?? 'primary'][
        this.disabled ? 'disabled' : 'default'
      ],
    ].join(' ');
  }

  private themes = {
    primary: {
      default: 'bg-sky-600 text-gray-50',
      disabled: 'bg-gray-300 text-gray-500 cursor-not-allowed',
    },
    outlined: {
      default: 'text-slate-700 border border-slate-700',
      disabled: '',
    },

    secondary: {
      default: 'bg-slate-300 rounded-lg text-slate-800',
      disabled: '',
    },
    danger: {
      default: 'bg-rose-700 text-slate-50',
      disabled: '',
    },
  };
}

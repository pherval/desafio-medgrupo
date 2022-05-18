import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: 'input[appInput]',
})
export class InputDirective {
  @Input() name?: string;
  @Input() id?: string;
  @Input() adornment: 'left' | 'right' = 'right';
  private _focus: boolean = false;

  constructor(private el: ElementRef<HTMLInputElement>) {}

  @Input() set focus(value: boolean) {
    this._focus = value;
    this._focus ? this.el.nativeElement.focus() : this.el.nativeElement.blur();
  }

  get focus(): boolean {
    return this._focus;
  }

  @HostBinding('class') get class() {
    return 'outline-none bg-gray-50 grow';
  }

  @HostListener('focus') onFocus() {
    this.focus = true;
  }

  @HostListener('blur') onBlur() {
    this.focus = false;
  }
}

import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  AfterContentInit,
  HostBinding,
} from '@angular/core';
import { InputDirective } from '../input.directive';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
})
export class FormFieldComponent implements AfterContentInit {
  @Input() label?: string;
  @Input() hasError: boolean = false;
  @ContentChild(InputDirective, { static: true })
  inputRef?: InputDirective;
  labelFor?: string;

  ngAfterContentInit(): void {
    this.labelFor = this.inputRef?.id;
  }

  get focused(): boolean {
    return this.inputRef?.focus ?? false;
  }
}

import { NgModule } from '@angular/core';
import { InputDirective } from './input.directive';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputAdornmentDirective } from './input-adornment.directive';
import { CommonModule } from '@angular/common';
import { FieldErrorComponent } from './field-error/field-error.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    InputDirective,
    FormFieldComponent,
    InputAdornmentDirective,
    FieldErrorComponent,
  ],
  exports: [
    InputDirective,
    FormFieldComponent,
    InputAdornmentDirective,
    FieldErrorComponent,
  ],
})
export class FormModule {}

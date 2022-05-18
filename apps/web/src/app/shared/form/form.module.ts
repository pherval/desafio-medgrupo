import { NgModule } from '@angular/core';
import { InputDirective } from './input.directive';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputAdornmentDirective } from './input-adornment.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [InputDirective, FormFieldComponent, InputAdornmentDirective],
  exports: [InputDirective, FormFieldComponent, InputAdornmentDirective],
})
export class FormModule {}

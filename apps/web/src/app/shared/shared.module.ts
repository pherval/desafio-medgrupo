import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TypeAheadService } from './type-ahead.service';
import { ButtonDirective } from './button.directive';

@NgModule({
  declarations: [ButtonDirective],
  imports: [CommonModule, FontAwesomeModule],
  exports: [FontAwesomeModule, ButtonDirective],
  providers: [TypeAheadService],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TypeAheadService } from './type-ahead.service';
import { ButtonDirective } from './button.directive';
import { SearchInputComponent } from './search-input/search-input.component';

@NgModule({
  declarations: [ButtonDirective, SearchInputComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [FontAwesomeModule, ButtonDirective, SearchInputComponent],
  providers: [TypeAheadService],
})
export class SharedModule {}

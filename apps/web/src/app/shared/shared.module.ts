import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TypeAheadService } from './type-ahead.service';
import { ButtonDirective } from './button.directive';
import { SearchInputComponent } from './search-input/search-input.component';
import { CardComponent } from './card/card.component';
import { CardSectionComponent } from './card/card-section/card-section.component';

@NgModule({
  declarations: [
    ButtonDirective,
    SearchInputComponent,
    CardComponent,
    CardSectionComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    FontAwesomeModule,
    ButtonDirective,
    SearchInputComponent,
    CardComponent,
    CardSectionComponent,
  ],
  providers: [TypeAheadService],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TypeAheadService } from './type-ahead.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, FontAwesomeModule],
  exports: [FontAwesomeModule],
  providers: [TypeAheadService],
})
export class SharedModule {}

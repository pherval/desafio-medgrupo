import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolsComponent } from './schools.component';
import { SchoolsRoutingModule } from './schools-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SchoolsComponent],
  imports: [CommonModule, SchoolsRoutingModule, SharedModule],
})
export class SchoolsModule {}

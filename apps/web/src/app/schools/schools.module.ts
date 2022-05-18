import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolsComponent } from './schools.component';
import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolsService } from './schools.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SchoolsComponent],
  imports: [CommonModule, SchoolsRoutingModule, SharedModule],
  providers: [SchoolsService],
})
export class SchoolsModule {}

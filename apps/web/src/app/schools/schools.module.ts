import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolsComponent } from './schools.component';
import { SchoolsRoutingModule } from './schools-routing.module';
import { CardComponent } from './card/card.component';
import { SchoolsService } from './schools.service';
import { SharedModule } from '../shared/shared.module';
import { NewSchoolComponent } from './new-school/new-school.component';

@NgModule({
  declarations: [SchoolsComponent, CardComponent, NewSchoolComponent],
  imports: [CommonModule, SchoolsRoutingModule, SharedModule],
  providers: [SchoolsService],
})
export class SchoolsModule {}

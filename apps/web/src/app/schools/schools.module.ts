import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolsComponent } from './schools.component';
import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolsService } from './schools.service';
import { SharedModule } from '../shared/shared.module';
import { NewSchoolComponent } from './new-school/new-school.component';
import { ListingSchoolsComponent } from './listing-schools/listing-schools.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateSchoolFormComponent } from './create-school-form/create-school-form.component';

@NgModule({
  declarations: [
    SchoolsComponent,
    NewSchoolComponent,
    ListingSchoolsComponent,
    CreateSchoolFormComponent,
  ],
  imports: [
    CommonModule,
    SchoolsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [SchoolsService],
})
export class SchoolsModule {}

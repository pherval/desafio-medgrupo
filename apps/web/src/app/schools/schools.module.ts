import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolsComponent } from './schools.component';
import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolsService } from './schools.service';
import { SharedModule } from '../shared/shared.module';
import { NewSchoolComponent } from './new-school/new-school.component';
import { ListingSchoolsComponent } from './listing-schools/listing-schools.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SchoolFormComponent } from './school-form/school-form.component';
import { ShowSchoolComponent } from './show-school/show-school.component';

@NgModule({
  declarations: [
    SchoolsComponent,
    NewSchoolComponent,
    ListingSchoolsComponent,
    SchoolFormComponent,
    ShowSchoolComponent,
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SchoolsRoutingModule } from './classes-routing.module';
import { ClassesService } from './classes.service';
import { NewClassesComponent } from './new-classes/new-classes.component';
import { ClassesFormComponent } from './classes-form/classes-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClassesComponent, NewClassesComponent, ClassesFormComponent],
  imports: [
    SharedModule,
    CommonModule,
    SchoolsRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [ClassesService],
})
export class ClassesModule {}

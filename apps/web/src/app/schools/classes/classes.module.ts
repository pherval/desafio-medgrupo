import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SchoolsRoutingModule } from './classes-routing.module';
import { ClassesService } from './classes.service';
import { NewClassesComponent } from './new-classes/new-classes.component';

@NgModule({
  declarations: [ClassesComponent, NewClassesComponent],
  imports: [SharedModule, CommonModule, SchoolsRoutingModule],
  providers: [ClassesService],
})
export class ClassesModule {}

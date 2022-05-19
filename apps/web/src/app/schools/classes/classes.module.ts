import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SchoolsRoutingModule } from './classes-routing.module';
import { ClassesService } from './classes.service';

@NgModule({
  declarations: [ClassesComponent],
  imports: [SharedModule, CommonModule, SchoolsRoutingModule],
  providers: [ClassesService],
})
export class ClassesModule {}

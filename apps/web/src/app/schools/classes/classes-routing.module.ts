import { NgModule } from '@angular/core';
import { type Routes, RouterModule } from '@angular/router';
import { ClassesComponent } from './classes.component';
import { NewClassesComponent } from './new-classes/new-classes.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewClassesComponent,
  },
  {
    path: '**',
    component: ClassesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolsRoutingModule {}

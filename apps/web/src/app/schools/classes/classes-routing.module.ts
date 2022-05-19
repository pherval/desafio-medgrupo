import { NgModule } from '@angular/core';
import { type Routes, RouterModule } from '@angular/router';
import { ClassesComponent } from './classes.component';

const routes: Routes = [
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

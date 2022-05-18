import { NgModule } from '@angular/core';
import { type Routes, RouterModule } from '@angular/router';
import { NewSchoolComponent } from './new-school/new-school.component';
import { SchoolsComponent } from './schools.component';

const routes: Routes = [
  { path: '', component: SchoolsComponent },
  { path: 'novo', component: NewSchoolComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolsRoutingModule {}

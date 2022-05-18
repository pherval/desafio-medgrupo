import { NgModule } from '@angular/core';
import { type Routes, RouterModule } from '@angular/router';
import { ListingSchoolsComponent } from './listing-schools/listing-schools.component';
import { NewSchoolComponent } from './new-school/new-school.component';
import { SchoolsComponent } from './schools.component';

const routes: Routes = [
  {
    path: '',
    component: SchoolsComponent,
    children: [
      { path: 'novo', component: NewSchoolComponent },
      { path: '**', component: ListingSchoolsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolsRoutingModule {}

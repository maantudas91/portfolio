import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationComponent } from './education.component';

const routes: Routes = [
    { path : '', component : EducationComponent}
];


@NgModule({
    declarations:[EducationComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationModule { }
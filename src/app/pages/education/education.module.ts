import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EducationComponent } from "./education.component";

const routes: Routes = [{ path: "", component: EducationComponent }];

@NgModule({
  declarations: [EducationComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class EducationModule {}

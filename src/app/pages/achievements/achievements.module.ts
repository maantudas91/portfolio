import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AchievementsComponent } from './achievements.component';

const routes: Routes = [
    { path : '', component : AchievementsComponent}
];

@NgModule({
    declarations:[AchievementsComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AchievementsModule { }
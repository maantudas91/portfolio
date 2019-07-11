import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'about' },
  { path : 'about', loadChildren: './pages/about/about.module#AboutModule'},
  { path : 'education', loadChildren: './pages/education/education.module#EducationModule'},
  { path : 'skills', loadChildren: './pages/skills/skills.module#SkillsModule'},
  { path : 'achievements', loadChildren: './pages/achievements/achievements.module#AchievementsModule'},
  { path : 'contact', loadChildren: './pages/contact/contact.module#ContactModule'},
  { path : 'experience', loadChildren: './pages/experience/experience.module#ExperienceModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

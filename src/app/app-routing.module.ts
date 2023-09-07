import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkComponent } from './work/work.component';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'work', component: WorkComponent },
  { path: 'project', component: ProjectComponent, children: [
    { path: '', redirectTo: '1', pathMatch: 'full' },
    { path: ':id', component: ProjectDetailsComponent }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

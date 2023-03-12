import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './layouts/error/error.component';

const routes: Routes = [
  { 
    path: 'jobs', 
    loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule) 
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

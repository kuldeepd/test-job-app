import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJobComponent } from './create-job/create-job.component';
import { JobsComponent } from './jobs.component';
import { ViewJobComponent } from './view-job/view-job.component';

const routes: Routes = [
  { 
    path: '', 
    component: JobsComponent 
  },
  { 
    path: 'create/:id', 
    component: CreateJobComponent 
  },
  { 
    path: ':id', 
    component: ViewJobComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }

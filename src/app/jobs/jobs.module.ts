import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { ViewJobComponent } from './view-job/view-job.component';


@NgModule({
  declarations: [
    JobsComponent,
    CreateJobComponent,
    ViewJobComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule
  ]
})
export class JobsModule { }

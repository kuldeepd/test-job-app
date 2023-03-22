import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { ViewJobComponent } from './view-job/view-job.component';
import { HttpClientModule } from '@angular/common/http';
import { JobService } from '../services/job.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import * as fromJobs from './store/reducers/jobs.reducer';
import { EffectsModule } from '@ngrx/effects';
import { JobsEffects } from './store/effects/jobs.effects';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    JobsComponent,
    CreateJobComponent,
    ViewJobComponent
  ],
  providers:[
    JobService,
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    StoreModule.forFeature(fromJobs.jobsFeatureKey, fromJobs.reducer),
    EffectsModule.forFeature([JobsEffects])
  ]
})
export class JobsModule { }

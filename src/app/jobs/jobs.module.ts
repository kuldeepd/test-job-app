import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { ViewJobComponent } from './view-job/view-job.component';
import { HttpClientModule } from '@angular/common/http';
import { JobService } from '../services/job.service';
import { EffectsModule, USER_PROVIDED_EFFECTS } from '@ngrx/effects';
import { JobEffects } from '../store/job.effects';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    JobsComponent,
    CreateJobComponent,
    ViewJobComponent
  ],
  providers:[
    JobService,
    /* JobEffects,
    {
      provide:USER_PROVIDED_EFFECTS,
      multi:true,
      useValue:[JobEffects]
    } */
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgbDatepickerModule
  ]
})
export class JobsModule { }

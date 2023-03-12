import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { JobService } from '../services/job.service';
import { Job } from './job.model';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs$:Observable<Job[]> = this.jobService.getAll();
  icons = {
    faEye
  }

  constructor(
    private store:Store<{ jobs: Job[] }>,
    private jobService:JobService
  ){}
  ngOnInit(): void {
    // this.store.dispatch({ type: '[Jobs Page] Load Jobs' });
  }
}

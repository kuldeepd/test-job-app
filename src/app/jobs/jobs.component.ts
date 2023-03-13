import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { catchError, map, Observable, of, switchMap, tap } from 'rxjs';
import { JobService } from '../services/job.service';
import { Job } from './job.model';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { jobsApiActions, jobsPageActions } from '../store/job.actions';
import { JobState } from '../store/job.reducer';
import { getJobs } from '../store/job.selectors';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs$!:Observable<Job[]>;
  icons = {
    faEye
  }

  constructor(
    private store:Store<JobState>,
    private jobService:JobService
  ){}
  ngOnInit(): void {
    this.jobs$ = this.store.pipe(
      switchMap((jobState:any)=>{
        if(!jobState || jobState.jobEntries.jobs.length<1) {       
          return this.jobService.getAll().pipe(
          tap(jobs => this.store.dispatch(jobsApiActions.jobsLoadedSuccess({jobs}))),
        )}
        else return this.store.pipe(select(getJobs))
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { JobService } from '../services/job.service';
import { jobsApiActions,jobsPageActions } from './job.actions';

 
@Injectable()
export class JobEffects {

  constructor(
    private actions$: Actions,
    private jobService: JobService
  ) {}
 
  loadJobs$ = createEffect(() => this.actions$.pipe(
    ofType(jobsPageActions.loadJobs),
    exhaustMap(() => this.jobService.getAll()
      .pipe(
        tap(console.log),
        map(jobs => jobsApiActions.jobsLoadedSuccess(jobs)),
        catchError(() => of({ type: '[Jobs API] Job Added Failure' }))
      ))
    )
  )
}
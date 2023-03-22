import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, withLatestFrom, mergeMap, switchMap, filter } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as JobsActions from '../actions/jobs.actions';
import { AppState } from 'src/app/reducers';
import { JobService } from 'src/app/services/job.service';
import { Store } from '@ngrx/store';
import {
  getJobs
} from '../selectors/jobs.selectors';
import { loadJobs,addJobSuccess,loadJobsSuccess,updateJob,updateJobSuccess,deleteJob,deleteJobSuccess,dummyAction } from '../actions/jobs.actions';
import { Update } from '@ngrx/entity';
import { Job } from '../../job.model';
import { RouterNavigatedAction, ROUTER_NAVIGATION } from '@ngrx/router-store';


@Injectable()
export class JobsEffects {

  constructor(
    private store:Store<AppState>,
    private jobsService:JobService,
    private actions$:Actions
  ){}

  loadJobs$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadJobs),
      withLatestFrom(this.store.select(getJobs)),
      mergeMap(([action, jobs]) => {
        if (!jobs.length || jobs.length === 1) {
          return this.jobsService.getAll().pipe(
            map((jobs) => {
              return loadJobsSuccess({ jobs });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });

  addJob$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(JobsActions.addJob),
      mergeMap((action) => {
        return this.jobsService.addJob(action.job).pipe(
          map((data) => {
            const job = { ...action.job, id: data.id };
            return addJobSuccess({ job });
          })
        );
      })
    );
  });

  updateJob$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateJob),
      switchMap((action) => {
        return this.jobsService.updateJob(action.job).pipe(
          map((data) => {
            const updatedJob: Update<Job> = {
              id: action.job.id,
              changes: {
                ...action.job,
              },
            };
            return updateJobSuccess({ job: updatedJob });
          })
        );
      })
    );
  });

  deleteJob$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteJob),
      switchMap((action) => {
        return this.jobsService.deleteJob(action.id).pipe(
          map((data) => {
            return deleteJobSuccess({ id: action.id });
          })
        );
      })
    );
  });

  getSingleJob$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction) => {
        return r.payload.routerState.url.startsWith('/jobs/details');
      }),
      map((r: RouterNavigatedAction) => {
        return r.payload.routerState.root['params']['id'];
      }),
      withLatestFrom(this.store.select(getJobs)),
      switchMap(([id, jobs]) => {
        if (!jobs.length) {
          return this.jobsService.getById(id).pipe(
            map((job) => {
              const jobData = [{ ...job, id }];
              return loadJobsSuccess({ jobs: jobData });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });
}

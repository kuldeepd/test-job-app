import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Job } from '../../job.model';

export const ADD_JOB_ACTION = '[jobs page] add job';
export const ADD_JOB_SUCCESS = '[jobs page] add job success';
export const UPDATE_JOB_ACTION = '[jobs page] update job';
export const UPDATE_JOB_SUCCESS = '[jobs page] update job success';
export const DELETE_JOB_ACTION = '[jobs page] delete job';
export const DELETE_JOB_SUCCESS = '[jobs page] delete job success';
export const LOAD_JOBS = '[jobs page] load jobs';
export const LOAD_JOBS_SUCCESS = '[jobs page] load jobs success';

export const addJob = createAction(ADD_JOB_ACTION, props<{ job: Job }>());

export const addJobSuccess = createAction(
  ADD_JOB_SUCCESS,
  props<{ job: Job }>()
);
export const updateJob = createAction(
  UPDATE_JOB_ACTION,
  props<{ job: Job }>()
);

export const updateJobSuccess = createAction(
  UPDATE_JOB_SUCCESS,
  props<{ job: Update<Job> }>()
);

export const deleteJob = createAction(
  DELETE_JOB_ACTION,
  props<{ id: string }>()
);
export const deleteJobSuccess = createAction(
  DELETE_JOB_SUCCESS,
  props<{ id: string }>()
);

export const loadJobs = createAction(LOAD_JOBS);
export const loadJobsSuccess = createAction(
  LOAD_JOBS_SUCCESS,
  props<{ jobs: Job[] }>()
);

export const dummyAction = createAction('[dummy action]');


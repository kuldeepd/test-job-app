import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Job } from '../jobs/job.model';
import { JobState } from './job.reducer';

export interface JobGroup {
  jobs: Job[];
}

export const getJobs = createSelector(
  createFeatureSelector('jobEntries'),
  (state:JobState) =>state.jobs 
);
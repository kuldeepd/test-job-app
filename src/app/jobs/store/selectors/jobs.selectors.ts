import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateUrl } from 'src/app/store/router/custom-serializer';
import { getCurrentRoute } from 'src/app/store/router/router.selector';
import * as fromJobs from '../reducers/jobs.reducer';
import {jobsAdapter, JobsState} from '../reducers/jobs.state'

export const selectJobsState = createFeatureSelector<fromJobs.State>(
  fromJobs.jobsFeatureKey
);

export const JOB_STATE_NAME = 'jobs';
const getJobsState = createFeatureSelector<JobsState>(JOB_STATE_NAME);
export const JobsSelectors = jobsAdapter.getSelectors();

export const getJobs = createSelector(getJobsState, JobsSelectors.selectAll);
export const getJobEntities = createSelector(
  getJobsState,
  JobsSelectors.selectEntities
);

export const getJobById = createSelector(
  getJobEntities,
  getCurrentRoute,
  (Jobs, route: RouterStateUrl) => {
    return Jobs ? Jobs[route.params['id']] : null;
  }
);

export const getCount = createSelector(getJobsState, (state) => state.count);

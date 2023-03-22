import { createFeature, createReducer, on } from '@ngrx/store';
import * as JobsActions from '../actions/jobs.actions';
import { initialState, jobsAdapter } from './jobs.state';

export const jobsFeatureKey = 'jobs';

export interface State {

}

/* export const initialState: State = {

}; */

export const reducer = createReducer(
  initialState,
  on(JobsActions.addJobSuccess, (state, action) => {
    return jobsAdapter.addOne(action.job, {
      ...state,
      count: state.count + 1,
    });
  }),
  on(JobsActions.updateJobSuccess, (state, action) => {
    return jobsAdapter.updateOne(action.job, state);
  }),
  on(JobsActions.deleteJobSuccess, (state, { id }) => {
    return jobsAdapter.removeOne(id, state);
  }),
  on(JobsActions.loadJobsSuccess, (state, action) => {
    return jobsAdapter.setAll(action.jobs, {
      ...state,
      count: state.count + 1,
    });
  })
);

export const jobsFeature = createFeature({
  name: jobsFeatureKey,
  reducer,
});


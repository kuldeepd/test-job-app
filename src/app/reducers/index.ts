import { isDevMode } from '@angular/core';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromJobs from '../jobs/store/reducers/jobs.reducer';
import { JobsState } from '../jobs/store/reducers/jobs.state';

export interface AppState {
  [fromJobs.jobsFeatureKey]: JobsState;
  router:RouterReducerState;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromJobs.jobsFeatureKey]: fromJobs.reducer,
  router:routerReducer,
};


export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];

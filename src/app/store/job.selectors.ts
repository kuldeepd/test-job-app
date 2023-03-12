import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Job } from '../jobs/job.model';

export interface JobGroup {
  product: Job;
  count: number;
}

export const selectCountProducts = createSelector(
  createFeatureSelector('jobEntries'),
  (state: Job[]) => {
    return state.length;
  }
);


export const selectTotalPrice = createSelector(
  createFeatureSelector('jobEntries'),
  (state: Job[]) => {
    //
  }
)

export const selectGroupedCartEntries = createSelector(
  createFeatureSelector('jobEntries'),
  (state: Job[]) => {
    //
  }
)
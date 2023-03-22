import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Job } from "../../job.model";

export interface JobsState extends EntityState<Job>{
  count: number;
}

export const jobsAdapter = createEntityAdapter<Job>({
  sortComparer: sortByName,
});

export const initialState:JobsState = jobsAdapter.getInitialState({count: 0,});

export function sortByName(a: Job, b: Job): number {
  const compare = a.job_title.localeCompare(b.job_title);
  if (compare > 0) {
    return -1;
  }

  if (compare < 0) {
    return 1;
  }

  return compare;
}
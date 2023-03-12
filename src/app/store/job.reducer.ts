import { ActionReducer, createReducer, INIT, on, UPDATE } from "@ngrx/store";
import { Job } from "src/app/jobs/job.model";
import { jobsApiActions,jobsPageActions } from "./job.actions";

export const initialState: Job[] = [];

export const {jobAddedSuccess,jobAddedFailure,jobsLoadedSuccess} = jobsApiActions;
export const {loadJobs} = jobsPageActions;

export const jobReducer = createReducer(
  initialState,
  on(jobAddedSuccess,(state:Job[],{job}):Job[] => {
      return [...state,job];
  }),
  on(jobAddedFailure, (state) => state),
  on(jobsLoadedSuccess, (state:Job[],{jobs}):Job[] => jobs),
  on(loadJobs,(state:Job[],{jobs}):Job[]=>jobs)
);
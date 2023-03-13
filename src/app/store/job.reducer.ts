import { ActionReducer, createReducer, INIT, on, UPDATE } from "@ngrx/store";
import { Job } from "src/app/jobs/job.model";
import { jobsApiActions,jobsPageActions } from "./job.actions";

export interface JobState {
  jobs: Job[];
}

export const initialState: JobState = {
  jobs: [],
};

export const {jobAddedSuccess,jobAddedFailure,jobsLoadedSuccess} = jobsApiActions;
export const {loadJobs} = jobsPageActions;

export const jobReducer = createReducer(
  initialState,
  on(jobAddedSuccess,(state,{job}) => ({...state,jobs:[...state.jobs,job]})),
  on(jobsLoadedSuccess,(state,{jobs}) => ({...state,jobs:[...jobs]})),
  // on(jobAddedFailure, (state) => state),
  // on(jobsLoadedSuccess, (state:Job[],{jobs}):Job[] => jobs),
  on(loadJobs,(state)=>{
    console.log('reducer called',state) 
    return state
  })
);
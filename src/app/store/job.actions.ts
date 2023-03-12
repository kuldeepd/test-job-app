import { createActionGroup,emptyProps, props } from "@ngrx/store";
import { Job } from "src/app/jobs/job.model";

export const jobsApiActions = createActionGroup({
  source: 'Jobs API',
  events: {
    'Jobs Loaded Success' : props<{jobs:Job[]}>(),
    'Job Added Success' : props<{job:Job}>(),
    'Job Added Failure' : props<{error:string}>(),
    'Job Added Failure Message' : (error:string)=>({error})
  }
});

export const jobsPageActions = createActionGroup({
  source: 'Jobs Page',
  events: {
    'Load Jobs' : props<{jobs:Job[]}>(),
    /* 'Job Added Success' : props<{job:Job}>(),
    'Job Added Failure' : props<{error:string}>(),
    'Job Added Failure Message' : (error:string)=>({error}) */
  }
});
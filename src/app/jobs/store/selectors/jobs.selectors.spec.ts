import * as fromJobs from '../reducers/jobs.reducer';
import { selectJobsState } from './jobs.selectors';

describe('Jobs Selectors', () => {
  it('should select the feature state', () => {
    const result = selectJobsState({
      [fromJobs.jobsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});

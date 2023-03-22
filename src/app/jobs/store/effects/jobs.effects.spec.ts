import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { JobsEffects } from './jobs.effects';

describe('JobsEffects', () => {
  let actions$: Observable<any>;
  let effects: JobsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        JobsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(JobsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

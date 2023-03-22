import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { catchError, map, Observable, of, switchMap, tap } from 'rxjs';
import { JobService } from '../services/job.service';
import { Job } from './job.model';
import { faEye,faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';
import { JobsState } from './store/reducers/jobs.state';
import {deleteJob, loadJobs} from './store/actions/jobs.actions'
import { getCount, getJobs } from './store/selectors/jobs.selectors';
import { AppState } from '../reducers';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs$!:Observable<Job[]>;
  count!:Observable<number>;
  icons = {
    faEye,faTrash,faEdit
  }

  constructor(
    private jobService:JobService,
    private store:Store<AppState>
  ){}
  ngOnInit(): void {
    this.jobs$ = this.store.select(getJobs);
    this.count = this.store.select(getCount);
    this.store.dispatch(loadJobs());
  }

  deleteJob(id:any){
    this.store.dispatch(deleteJob({id}));
  }
}

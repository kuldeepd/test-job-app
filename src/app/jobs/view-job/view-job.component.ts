import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, switchMap } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { Job } from '../job.model';
import { getJobById } from '../store/selectors/jobs.selectors';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent implements OnInit {
  job$!: Observable<Job | null| undefined>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.job$ = this.store.select(getJobById);
  }
}

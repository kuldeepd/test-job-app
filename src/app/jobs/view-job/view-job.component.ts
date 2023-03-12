import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { JobService } from 'src/app/services/job.service';
import { Job } from '../job.model';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent implements OnInit {
  job$!:Observable<Job>;
  constructor(private jobService:JobService, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.job$ = this.route.params
      .pipe(
        switchMap(params=>this.jobService.getById(params['id']))
      );
  }
}

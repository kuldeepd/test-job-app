import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { JobService } from 'src/app/services/job.service';
import { jobsApiActions } from 'src/app/store/job.actions';
import { JobState } from 'src/app/store/job.reducer';
import { getJobs } from 'src/app/store/job.selectors';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent {
  JobForm:FormGroup<any> = this.fb.group({
    job_number: ['',Validators.required],
    job_title: ['',Validators.required],
    job_start_date: ['',Validators.required],
    job_close_date: ['',Validators.required],
    experience_required: [true,Validators.required],
    number_of_openings: [0,Validators.required],
    job_notes: ['',Validators.required]
  })

  get job_number(){
    return this.JobForm.controls['job_number']
  }

  get job_title(){
    return this.JobForm.controls['job_title']
  }
  get job_start_date(){
    return this.JobForm.controls['job_start_date']
  }
  get job_close_date(){
    return this.JobForm.controls['job_close_date']
  }
  
  get experience_required(){
    return this.JobForm.controls['experience_required']
  }
  get number_of_openings(){
    return this.JobForm.controls['number_of_openings']
  }
  get job_notes(){
    return this.JobForm.controls['job_notes']
  }

  constructor(
    private fb:FormBuilder,
    private jobService:JobService,
    private router : Router,
    private store:Store<JobState>,
  ){}

  saveJob(){
    if(this.JobForm.invalid){
      return;
    }
    const job = this.JobForm.value;
    this.jobService.upsertJob(job).subscribe(
      jobSaved=>{
        if(jobSaved.id){
          this.store.dispatch(jobsApiActions.jobAddedSuccess({job:jobSaved}))         
          this.router.navigateByUrl('/jobs');
        }
      }
    );
  }
}

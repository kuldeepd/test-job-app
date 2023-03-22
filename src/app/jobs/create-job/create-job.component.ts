import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { JobService } from 'src/app/services/job.service';
import { Job } from '../job.model';
import { addJob, updateJob } from '../store/actions/jobs.actions';
import { getJobById } from '../store/selectors/jobs.selectors';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit{
  JobForm:FormGroup<any> = this.fb.group({
    id:null,
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
    private store:Store<AppState>,
    private route : ActivatedRoute,
    private router:Router
  ){}

  ngOnInit(){    
    this.store.select(getJobById).subscribe(job=>{
      if(job) this.JobForm.setValue(job);
    });
  }

  saveJob(){
    if(this.JobForm.invalid){return}
    const job = this.JobForm.value;
    job.id ? this.store.dispatch(updateJob({job}))
    :this.store.dispatch(addJob({job}))    
    this.router.navigateByUrl('/jobs');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Job } from '../jobs/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }
  jobApiUrl = `${environment.apiUrl}/jobs`

  getAll():Observable<Job[]>{
    return this.http.get<Job[]>(this.jobApiUrl);
  }

  getById(id:number):Observable<Job>{
    return this.http.get<Job>(`${this.jobApiUrl}/${id}`);
  }

  addJob(job:Job):Observable<Job>{
    return this.http.post<Job>(this.jobApiUrl,job);
  }

  updateJob(job:Job):Observable<Job>{
    return this.http.put<Job>(`${this.jobApiUrl}/${job.id}`,job);
  }

  deleteJob(id:any){
    return this.http.delete(`${this.jobApiUrl}/${id}`);
  }
}

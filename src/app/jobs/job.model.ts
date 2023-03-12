export interface Job {
  id:number;
  job_number: string;
  job_title: string;
  job_start_date: string;
  job_close_date: string;
  experience_required: boolean;
  number_of_openings: number;
  job_notes: string;
}

export function createJob({
  id = 0,
  job_number = "",
  job_title = "",
  job_start_date = getISODate(),
  job_close_date = getISODate(),
  experience_required = true,
  number_of_openings = 0,
  job_notes = ''
}:Job):Job{
  return {
    id,
    job_number,
    job_title,
    job_start_date,
    job_close_date,
    experience_required,
    number_of_openings,
    job_notes
  }
}

export function getISODate(date:Date | string = new Date()):string{
 let d = new Date(date).toISOString();
 return d.split('T')[0];
}
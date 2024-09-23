import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  url='https://localhost:7119/User';
  
  constructor(private http:HttpClient) { }
  getStudent()
  {
    const res = this.http.get(this.url);
    console.log('getstudent ' + JSON.stringify(res));
    return this.http.get(this.url);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  url='https://localhost:7119/User';
  
  constructor(private http:HttpClient) { }
  getUser( userForm: FormGroup )
  {
    console.log('getuser');
 /*   let headers = new HttpHeaders({
      'Content-Type': 'application/json'});

  let options = { headers: headers }; */

    const res = this.http.get(this.url);
    let formObj = userForm.getRawValue();
    let serializedForm = JSON.stringify(formObj);
    let botadata = btoa(serializedForm);
    console.log('btoa ' + btoa(serializedForm));
    //serializedForm = serializedForm.replaceAll('"', '\\"'); 


   // console.log('getuser ' + JSON.stringify(res));
    //console.log('serializedForm ' + serializedForm);
   /* let ret = '' ;
    this.http.post(this.url, '"' + serializedForm + '"', options)
    .subscribe(
        data => {console.log("success!", data); return data; },

        error => console.error("couldn't post because", error)
    ); */

    //return this.http.get(this.url);
    return this.http.get(this.url + '?data=' + botadata);
  }
}

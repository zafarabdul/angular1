import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Formdata {
  URL='http://localhost:3000/api/';
  // constructor(private http: HttpClient) {}
  // getUserData(){
  //     return this.http.get(this.URL+'users');
  //   }
    AddForm= new FormGroup({
    empId:new FormControl(''),
    image:new FormControl<null | File | undefined>(null),
    typeOfService:new FormControl('',[Validators.required]),
    organizationName:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    languages:new FormControl([], [Validators.required]),
    gender:new FormControl('',[Validators.required]),
    mobile:new FormControl('',[Validators.required]),
    email:new FormControl(''),
    vehicleType:new FormControl<null|string>(null),
    vehicleNum:new FormControl<string>('',[Validators.required]),
    file:new FormControl<null | File | undefined>(null,[Validators.required]),
    DocType:new FormControl(''),
    joiningDate:new FormControl(''),
    AdditionalFiles: new FormControl<null | File>(null),
  })
}
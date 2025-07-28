import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Formdata {
  addHelper() {
    throw new Error('Method not implemented.');
  }
  URL='http://localhost:3000/api/';
  constructor(private http: HttpClient) {}
  getUserData(){
      return this.http.get(this.URL+'users');
  }
  getUsersByName(name:string){
    return this.http.get(this.URL+'users/'+name);
  }
  getUserById(id:string){
    return this.http.get(this.URL+'users/'+id);
  }
  deleteUserById(id:string){
    return this.http.delete(this.URL+'users/'+id);
  }
  EditUserById(id:string){
    return this.http.put(this.URL+'users/'+id, this.AddForm.value);
  }
  AddUser(){
    return this.http.post(this.URL+'users', this.AddForm.value);
  }

    AddForm= new FormGroup({
    empId:new FormControl(200),
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
    joiningDate:new FormControl(new Date().toISOString().split('T')[0]),
    AdditionalFiles: new FormControl<null | File>(null),
  })
}
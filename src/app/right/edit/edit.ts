import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';
import { ReactiveFormsModule,FormControl,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-edit',
  imports: [RouterLink,NgStyle,ReactiveFormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css'
})
export class Edit {
  isHelper: boolean = true;
  isHelperCh(got:boolean):void{
    this.isHelper = got;
  }
    AddForm= new FormGroup({
    typeOfService:new FormControl('',[Validators.required]),
    organizationName:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    languages:new FormControl([]),
    gender:new FormControl('',[Validators.required]),
    mobile:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    vehicleType:new FormControl('',[Validators.required]),
    file:new FormControl(null,[Validators.required]),
  })
  onSubmit(){
    console.log(this.AddForm.value.name);
  }
}

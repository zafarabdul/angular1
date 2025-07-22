import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';
import {NgIf,NgStyle} from '@angular/common';
import {FormGroup,FormControl,ReactiveFormsModule, Validators} from '@angular/forms';
@Component({
  selector: 'app-add',
  standalone : true,
  imports: [RouterLink,ReactiveFormsModule,NgIf,NgStyle],
  templateUrl: './add.html',
  styleUrl: './add.css'
})
export class Add {
  pageNo:number=1;
  midBlock=true;

  AddForm= new FormGroup({
    typeOfService:new FormControl('',[Validators.required]),
    organizationName:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    languages:new FormControl([]),
    gender:new FormControl('',[Validators.required]),
    mobile:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    vehicleType:new FormControl('',[Validators.required]),
    file:new FormControl<null | File | undefined>(null,[Validators.required]),
    DocType:new FormControl(''),
  })
  // onSubmit(){
  //   console.log(this.AddForm.value.name);
  // }
  add(num:number){
    if(num==1)this.pageNo++;
    else{
      this.pageNo--;
    }
  }
  changeMid(){
    this.midBlock=!this.midBlock;
  }
    getFile(): string | undefined {
    const file = this.AddForm.get('file')?.value;
    return file instanceof File ? file.name : undefined;
  }


  uploadedFile(event: Event) {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];
  if (file) {
    this.AddForm.get('file')?.setValue(file);
    console.log('Saved file:', file);
  }
}
}

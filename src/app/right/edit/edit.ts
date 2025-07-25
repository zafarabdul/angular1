import {
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
  signal,
}from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Formdata } from '../../services/formdata';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.html',
  styleUrl: './edit.css',
  standalone:true,
  imports: [
    ReactiveFormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatRadioButton,
    MatRadioGroup,
    RouterLink,
],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Edit {
isHelper: any;
isHelperCh(arg0: number) {
throw new Error('Method not implemented.');
}
  imgBuffer = signal<any>(null);
  imgBuffer2= signal<any>(null);
  AddForm: FormGroup;
  constructor(public data: Formdata, private readonly cdr: ChangeDetectorRef) {
    this.AddForm = this.data.AddForm;
  }

  get languages() {
    return this.AddForm.get('languages');
  }
  midBlock = signal<any>(false);
  pageNo=1
isFilled(field: string) {
  const control = this.AddForm.get(field);
  return control?.touched && control.hasError('required');
}

add(num: number) {
  if (num === 1 && this.pageNo==1) {
    this.AddForm.markAllAsTouched();
    if (this.isFilled('typeOfService') || this.isFilled('mobile')  || this.isFilled('organizationName')  || this.isFilled('name')  || this.isFilled('languages')
    || this.isFilled('gender') || this.isFilled('file') || (this.AddForm.get('vehicleType')?.value && this.isFilled('vehicleNum'))
    ) return;
    this.pageNo++;
  }
  else if(num === 1) {
    this.pageNo++;
  }
  else {
    this.pageNo--;
  }
}

  changeMid() {
    console.log('hit')
    this.midBlock.set(!this.midBlock())
    this.cdr.detectChanges();
    console.log(this.AddForm.getRawValue())
  }


  getFile(): string | undefined {
    const file = this.AddForm.get('file')?.value;
    return file instanceof File ? file.name : undefined;
  }

  cancel() {
    this.changeMid();
    this.imgBuffer2.set(null);
    this.AddForm.get('file')?.setValue(null);
  }

  uploadedFile(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      this.AddForm.get('file')?.setValue(file);
      this.imgBuffer2.set(file);
    }
  }
  fileSelected(event :Event){
     const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      this.AddForm.get('AdditionalFiles')?.setValue(file);
      this.imgBuffer2.set(file);
    }
   
  }

  

  ImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        this.AddForm.get('image')?.setValue(reader.result);
        this.imgBuffer.set(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

}


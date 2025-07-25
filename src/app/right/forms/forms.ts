import {
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
  NgModule,
  Pipe,
  NgZone,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Formdata } from '../../services/formdata';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';

@Component({
  selector: 'app-forms',
  standalone: true,//jjkjlkkjkjkjkkjkjkljljkljlkjkjkljljjljljljljl. -- ask
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatRadioGroup,
    MatRadioButton,
  ],
  templateUrl: './forms.html',
  styleUrls: ['./forms.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Forms {
  imgBuffer = signal<any>(null);
  imgBuffer2= signal<any>(null);
  AddForm: FormGroup;
  constructor(public data: Formdata, private readonly cdr: ChangeDetectorRef) {
    this.AddForm = this.data.AddForm;
  }

  get languages() {
    return this.AddForm.get('languages');
  }
  midBlock = signal<boolean>(false);
  @Input() pageNo: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  requestPageChange(forward: boolean) {
    this.pageChange.emit(this.pageNo);
  }
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
    this.midBlock.set(!this.midBlock())
    // this.cdr.detectChanges();
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
    console.log(file)
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

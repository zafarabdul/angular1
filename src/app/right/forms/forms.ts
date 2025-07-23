import { ChangeDetectorRef, Component ,Input , Output, EventEmitter, NgModule, Pipe} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule , FormsModule} from '@angular/forms';
import { Formdata } from '../../services/formdata';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton,MatRadioGroup } from '@angular/material/radio';
interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule ,MatSelectModule,MatFormFieldModule, MatInputModule , FormsModule ,MatRadioGroup,MatRadioButton],
  templateUrl: './forms.html',
  styleUrls: ['./forms.css']
})
export class Forms {

  get languages() {
    return this.AddForm.get('languages');
  }






  AddForm: FormGroup;
  midBlock = false;
  @Input() pageNo:number=1;
  constructor(public data: Formdata, private readonly cdr: ChangeDetectorRef) {
    this.AddForm = this.data.AddForm;
  }
  @Output() pageChange = new EventEmitter<number>();

  requestPageChange(forward: boolean) {
    this.pageChange.emit(this.pageNo);
  }

  add(num: number) {
    if (num == 1) this.pageNo++;
    else {
      this.pageNo--;
    }
  }

  changeMid() {
    this.midBlock = !this.midBlock;
  }

  getFile(): string | undefined {
    const file = this.AddForm.get('file')?.value;
    return file instanceof File ? file.name : undefined;
  }

  cancel() {
    this.changeMid();
    this.AddForm.get('file')?.setValue(null);
  }

  uploadedFile(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      this.AddForm.get('file')?.setValue(file);
    }
  }

  ImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.AddForm.get('image')?.setValue(reader.result);
        this.cdr.markForCheck();
      };
      reader.readAsDataURL(file);
    }
  }
}

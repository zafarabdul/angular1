import { Component, signal, computed, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule, NgFor , NgIf} from '@angular/common';
import { RouterLink } from '@angular/router';
interface HelperItem {
  empId: number;
  name: string;
  gender: string;
  language: string;
  mobile: string;
  email: string;
  deviceType: string;
  joinedDate: string;
  age?: number;
}
@Component({
  selector: 'helper',
  imports: [FormsModule , RouterLink, CommonModule],
  standalone :true,
  templateUrl: './helper.html',
  styleUrl: './helper.css'
})
export class Helper {
  sortedBy=3;
  isVisible = signal<boolean>(false);
  isVisiblea = signal<boolean>(false);
  isVisibleb = signal<boolean>(false);
  defaultId= signal('');
  defaultData = computed(() => this.data().find(item => item.name === this.defaultId()));
  tempData = signal<HelperItem[]>([]);
  searchText = signal('');
  constructor(){
    this.tempData.set(this.data().slice(0,7));
    this.defaultId.set(this.data()[0].name);
    this.sortedBy=3;
  }
  changeDef(name: string): void {
    this.defaultId.set(name);
    // console.log(this.defaultData());
  }

SearchItem(): void {
  const input = this.searchText().toLowerCase().trim();
  if (input === '') {
    this.tempData.set([...this.data()]);
  } else {
    this.tempData.set(
      this.data().filter(item =>
        item.name.toLowerCase().includes(input)
      )
    );
  }
  this.sortedBy=3;
}
  togglesort(got:number): void {
    this.sortedBy=got;
    if(this.sortedBy==0){
        this.tempData.set(this.tempData().sort((a, b) =>
        a.name.localeCompare(b.name)
      ));
    }
    else if(this.sortedBy==1){
        this.tempData.set(this.tempData().sort((a, b) => a.empId - b.empId));
    }
  }
  toggleVis(got:number):void{
    if(got==1)this.isVisible.set(!this.isVisible());
    else if(got==2){
      this.isVisiblea.set(!this.isVisiblea());
      console.log('showed 2');
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.sort-box') && !target.closest('#sort')) {
      // console.log('triggered a');
      this.isVisible.set(false);
    }
    if(!target.closest('filter-box') && !target.closest('#filter')){
      console.log('sdfds');
      this.isVisiblea.set(false);
      // console.log('triggered b');
    }
    // if(!target.closest(''))
  }
  data = signal<HelperItem[]>(
[
  {
    empId: 1,
    name: 'Kimberly Ruiz',
    gender: 'Male',
    language: 'Telugu',
    mobile: '3981756164',
    email: 'emp001@example.com',
    deviceType: 'Doctor',
    joinedDate: '2023-12-09'
  },
  {
    empId: 7,
    name: 'Timothy Wilson',
    gender: 'Male',
    language: 'English',
    mobile: '3120406900',
    email: 'emp002@example.com',
    deviceType: 'Organization',
    joinedDate: '2024-11-28'
  },
  {
    empId: 3,
    name: 'Gwendolyn Mullins',
    gender: 'Female',
    language: 'Hindi',
    mobile: '9277367990',
    email: 'emp003@example.com',
    deviceType: 'Organization',
    joinedDate: '2024-01-05'
  },
  {
    empId: 4,
    name: 'Susan Espinoza',
    gender: 'Male',
    language: 'Malayalam',
    mobile: '7237779050',
    email: 'emp004@example.com',
    deviceType: 'Doctor',
    joinedDate: '2023-11-09'
  },
  {
    empId: 6,
    name: 'Stephanie Lang',
    gender: 'Other',
    language: 'Malayalam',
    mobile: '8531031965',
    email: 'emp005@example.com',
    deviceType: 'Technician',
    joinedDate: '2024-01-03'
  },
  {
    empId: 5,
    name: 'Mary Carney',
    gender: 'Female',
    language: 'English',
    mobile: '5916160403',
    email: 'emp006@example.com',
    deviceType: 'Technician',
    joinedDate: '2025-01-18'
  },
  {
    empId: 2,
    name: 'Kimberly Flores',
    gender: 'Other',
    language: 'Tamil',
    mobile: '9285139552',
    email: 'emp007@example.com',
    deviceType: 'Organization',
    joinedDate: '2023-08-24'
  },
  {
    empId: 10,
    name: 'Samuel Brown',
    gender: 'Male',
    language: 'Telugu',
    mobile: '4675256471',
    email: 'emp008@example.com',
    deviceType: 'Technician',
    joinedDate: '2024-02-11'
  },
  {
    empId: 9,
    name: 'Kenneth Hughes',
    gender: 'Male',
    language: 'Gujarati',
    mobile: '8716076912',
    email: 'emp009@example.com',
    deviceType: 'Organization',
    joinedDate: '2023-09-18'
  },
  {
    empId: 8,
    name: 'Jane Fuentes',
    gender: 'Female',
    language: 'Tamil',
    mobile: '0270652146',
    email: 'emp010@example.com',
    deviceType: 'Administrator',
    joinedDate: '2025-03-11'
  }
]);
}

import { Component, signal, computed, HostListener } from '@angular/core';
import { FormsModule , FormGroup } from '@angular/forms';
import {CommonModule, NgFor , NgIf} from '@angular/common';
import { RouterLink } from '@angular/router';
import {Formdata} from '../../services/formdata';

interface HelperItem {
  empId: number;
  name: string;
  gender: string;
  language: string;
  mobile: string;
  email: string;
  deviceType: string;
  joinedDate: string;
  serviceType:string;
  organization:string;
  vehicleType:string;
  age?: number;
}
@Component({
  selector: 'helper',
  standalone :true,
  imports: [FormsModule , RouterLink, CommonModule,NgIf,NgFor],
  templateUrl: './helper.html',
  styleUrl: './helper.css'
})
export class Helper {
  AddForm!:FormGroup;
  sortedBy=3;
  isVisible = signal<boolean>(false);
  isVisiblea = signal<boolean>(false);
  isVisibleb = signal<boolean>(false);
  defaultId= signal('');
  defaultData = computed(() => this.data().find(item => item.name === this.defaultId()));
  tempData = signal<HelperItem[]>([]);
  searchText = signal('');
  constructor(public fdata:Formdata){
    this.AddForm=this.fdata.AddForm;
    this.tempData.set(this.data().slice(0,7));
    this.defaultId.set(this.data()[0].name);
    this.sortedBy=3;
  }
  changeDef(name: string): void {
    this.defaultId.set(name);
  }
Timer:any;
SearchItem(): void {
  const input = this.searchText().toLowerCase().trim();
  if (input === '') {
    this.tempData.set([...this.data()]);
  } else {
    clearTimeout(this.Timer);
    this.Timer=setTimeout(()=>{
      this.tempData.set(
      this.data().filter(item =>
        item.name.toLowerCase().includes(input)
      )
    );
    },1000);
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
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.sort-box') && !target.closest('#sort')) {
      this.isVisible.set(false);
    }
    if(!target.closest('.filter-box') && !target.closest('#filter')){
      this.isVisiblea.set(false);
    }
    // if(!target.closest(''))
  }
  orgs="";
  organizations=['ASBL','SpringHelpers']
  onCheckboxChange(event:Event):void{

  }

  data = signal<HelperItem[]>([]);
  // ngOnInit(){
  //   this.fdata.getUserData().subscribe((res:any)=>{

  //   })
  // }

}

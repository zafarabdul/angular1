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
    if(!target.closest('.filter-box') && !target.closest('#filter')){
      console.log('sdfds');
      this.isVisiblea.set(false);
      // console.log('triggered b');
    }
    // if(!target.closest(''))
  }
  orgs="";
  organizations=['ASBL','SpringHelpers']
  onCheckboxChange(event:Event):void{

  }

  data = signal<HelperItem[]>( [
  {
    empId: 1,
    name: 'Emily Carter',
    gender: 'Female',
    language: 'Hindi',
    mobile: '9123456781',
    email: 'emily1@example.com',
    deviceType: 'Doctor',
    serviceType: 'Nurse',
    organization: 'ASBL',
    vehicleType: 'Car',
    joinedDate: '2023-03-01'
  },
  {
    empId: 2,
    name: 'John Doe',
    gender: 'Male',
    language: 'English',
    mobile: '9876543210',
    email: 'john2@example.com',
    deviceType: 'Technician',
    serviceType: 'Driver',
    organization: 'Springs Helpers',
    vehicleType: 'Bike',
    joinedDate: '2024-06-15'
  },
  {
    empId: 3,
    name: 'Ayesha Khan',
    gender: 'Female',
    language: 'Urdu',
    mobile: '9988776655',
    email: 'ayesha3@example.com',
    deviceType: 'Organization',
    serviceType: 'Cook',
    organization: 'ASBL',
    vehicleType: 'Car',
    joinedDate: '2022-11-20'
  },
  {
    empId: 4,
    name: 'David Smith',
    gender: 'Male',
    language: 'Malayalam',
    mobile: '8899776655',
    email: 'david4@example.com',
    deviceType: 'Technician',
    serviceType: 'Maid',
    organization: 'Springs Helpers',
    vehicleType: 'Bike',
    joinedDate: '2024-09-25'
  },
  {
    empId: 5,
    name: 'Priya Verma',
    gender: 'Female',
    language: 'Gujarati',
    mobile: '9012345678',
    email: 'priya5@example.com',
    deviceType: 'Doctor',
    serviceType: 'Cook',
    organization: 'ASBL',
    vehicleType: 'Car',
    joinedDate: '2023-12-12'
  },
  {
    empId: 6,
    name: 'Ravi Kumar',
    gender: 'Male',
    language: 'Telugu',
    mobile: '9876501234',
    email: 'ravi6@example.com',
    deviceType: 'Organization',
    serviceType: 'Driver',
    organization: 'Springs Helpers',
    vehicleType: 'Bike',
    joinedDate: '2025-01-05'
  },
  {
    empId: 7,
    name: 'Sara Ali',
    gender: 'Female',
    language: 'Tamil',
    mobile: '8765432109',
    email: 'sara7@example.com',
    deviceType: 'Technician',
    serviceType: 'Nurse',
    organization: 'ASBL',
    vehicleType: 'Car',
    joinedDate: '2024-04-18'
  },
  {
    empId: 8,
    name: 'Mohan Das',
    gender: 'Male',
    language: 'Kannada',
    mobile: '7654321098',
    email: 'mohan8@example.com',
    deviceType: 'Doctor',
    serviceType: 'Maid',
    organization: 'Springs Helpers',
    vehicleType: 'Bike',
    joinedDate: '2022-08-30'
  },
  {
    empId: 9,
    name: 'Jennifer Brown',
    gender: 'Female',
    language: 'Punjabi',
    mobile: '8123456789',
    email: 'jennifer9@example.com',
    deviceType: 'Organization',
    serviceType: 'Cook',
    organization: 'ASBL',
    vehicleType: 'Car',
    joinedDate: '2024-03-14'
  },
  {
    empId: 10,
    name: 'Karan Kapoor',
    gender: 'Male',
    language: 'Hindi',
    mobile: '9988123456',
    email: 'karan10@example.com',
    deviceType: 'Technician',
    serviceType: 'Driver',
    organization: 'Springs Helpers',
    vehicleType: 'Bike',
    joinedDate: '2023-10-10'
  },
  {
    empId: 11,
    name: 'Fatima Sheikh',
    gender: 'Female',
    language: 'Urdu',
    mobile: '9090909090',
    email: 'fatima11@example.com',
    deviceType: 'Doctor',
    serviceType: 'Nurse',
    organization: 'ASBL',
    vehicleType: 'Car',
    joinedDate: '2025-06-06'
  },
  {
    empId: 12,
    name: 'Rahul Singh',
    gender: 'Male',
    language: 'Bengali',
    mobile: '7878787878',
    email: 'rahul12@example.com',
    deviceType: 'Organization',
    serviceType: 'Maid',
    organization: 'Springs Helpers',
    vehicleType: 'Bike',
    joinedDate: '2024-12-01'
  },
  {
    empId: 13,
    name: 'Anita Desai',
    gender: 'Female',
    language: 'Marathi',
    mobile: '8989898989',
    email: 'anita13@example.com',
    deviceType: 'Technician',
    serviceType: 'Cook',
    organization: 'ASBL',
    vehicleType: 'Car',
    joinedDate: '2023-05-22'
  },
  {
    empId: 14,
    name: 'James Lee',
    gender: 'Male',
    language: 'English',
    mobile: '7777777777',
    email: 'james14@example.com',
    deviceType: 'Doctor',
    serviceType: 'Nurse',
    organization: 'Springs Helpers',
    vehicleType: 'Bike',
    joinedDate: '2022-07-14'
  },
  {
    empId: 15,
    name: 'Ritika Sharma',
    gender: 'Female',
    language: 'Hindi',
    mobile: '6666666666',
    email: 'ritika15@example.com',
    deviceType: 'Organization',
    serviceType: 'Driver',
    organization: 'ASBL',
    vehicleType: 'Car',
    joinedDate: '2023-01-11'
  },
  {
    empId: 16,
    name: 'Arjun Nair',
    gender: 'Male',
    language: 'Malayalam',
    mobile: '9999999999',
    email: 'arjun16@example.com',
    deviceType: 'Technician',
    serviceType: 'Maid',
    organization: 'Springs Helpers',
    vehicleType: 'Bike',
    joinedDate: '2025-02-17'
  },
  {
    empId: 17,
    name: 'Meera Joshi',
    gender: 'Female',
    language: 'Gujarati',
    mobile: '7878121212',
    email: 'meera17@example.com',
    deviceType: 'Doctor',
    serviceType: 'Cook',
    organization: 'ASBL',
    vehicleType: 'Car',
    joinedDate: '2024-08-08'
  },
  {
    empId: 18,
    name: 'Imran Khan',
    gender: 'Male',
    language: 'Urdu',
    mobile: '9090112233',
    email: 'imran18@example.com',
    deviceType: 'Organization',
    serviceType: 'Nurse',
    organization: 'Springs Helpers',
    vehicleType: 'Bike',
    joinedDate: '2023-04-03'
  },
  {
    empId: 19,
    name: 'Lata Pawar',
    gender: 'Female',
    language: 'Marathi',
    mobile: '8080808080',
    email: 'lata19@example.com',
    deviceType: 'Technician',
    serviceType: 'Driver',
    organization: 'ASBL',
    vehicleType: 'Car',
    joinedDate: '2022-09-19'
  },
  {
    empId: 20,
    name: 'Vinod Babu',
    gender: 'Male',
    language: 'Telugu',
    mobile: '7070707070',
    email: 'vinod20@example.com',
    deviceType: 'Doctor',
    serviceType: 'Maid',
    organization: 'Springs Helpers',
    vehicleType: 'Bike',
    joinedDate: '2024-10-27'
  },
  {
    empId: 21,
    name: 'Nisha Patel',
    gender: 'Female',
    language: 'Gujarati',
    mobile: '6767676767',
    email: 'nisha21@example.com',
    deviceType: 'Organization',
    serviceType: 'Cook',
    organization: 'ASBL',
    vehicleType: 'Car',
    joinedDate: '2023-06-06'
  },
  {
    empId: 22,
    name: 'Manoj Jha',
    gender: 'Male',
    language: 'Hindi',
    mobile: '6565656565',
    email: 'manoj22@example.com',
    deviceType: 'Technician',
    serviceType: 'Driver',
    organization: 'Springs Helpers',
    vehicleType: 'Bike',
    joinedDate: '2024-01-21'
  },
  {
    empId: 23,
    name: 'Sophia George',
    gender: 'Female',
    language: 'English',
    mobile: '6464646464',
    email: 'sophia23@example.com',
    deviceType: 'Doctor',
    serviceType: 'Nurse',
    organization: 'ASBL',
    vehicleType: 'Car',
    joinedDate: '2025-03-03'
  },
  {
    empId: 24,
    name: 'Aman Tiwari',
    gender: 'Male',
    language: 'Hindi',
    mobile: '6363636363',
    email: 'aman24@example.com',
    deviceType: 'Organization',
    serviceType: 'Maid',
    organization: 'Springs Helpers',
    vehicleType: 'Bike',
    joinedDate: '2022-12-24'
  },
  {
    empId: 25,
    name: 'Karishma Jain',
    gender: 'Female',
    language: 'Punjabi',
    mobile: '6262626262',
    email: 'karishma25@example.com',
    deviceType: 'Technician',
    serviceType: 'Cook',
    organization: 'ASBL',
    vehicleType: 'Car',
    joinedDate: '2024-11-17'
  },
  {
    empId: 26,
    name: 'Vikram Reddy',
    gender: 'Male',
    language: 'Telugu',
    mobile: '6161616161',
    email: 'vikram26@example.com',
    deviceType: 'Doctor',
    serviceType: 'Driver',
    organization: 'Springs Helpers',
    vehicleType: 'Bike',
    joinedDate: '2023-07-13'
  },
  {
    empId: 27,
    name: 'Rani Mehta',
    gender: 'Female',
    language: 'Hindi',
    mobile: '6060606060',
    email: 'rani27@example.com',
    deviceType: 'Organization',
    serviceType: 'Nurse',
    organization: 'ASBL',
    vehicleType: 'Car',
    joinedDate: '2025-05-05'
  },
  {
    empId: 28,
    name: 'Ajay Rana',
    gender: 'Male',
    language: 'Punjabi',
    mobile: '5959595959',
    email: 'ajay28@example.com',
    deviceType: 'Technician',
    serviceType: 'Maid',
    organization: 'Springs Helpers',
    vehicleType: 'Bike',
    joinedDate: '2023-08-08'
  },
  {
    empId: 29,
    name: 'Sneha Kulkarni',
    gender: 'Female',
    language: 'Marathi',
    mobile: '5858585858',
    email: 'sneha29@example.com',
    deviceType: 'Doctor',
    serviceType: 'Cook',
    organization: 'ASBL',
    vehicleType: 'Car',
    joinedDate: '2024-06-28'
  },
  {
    empId: 30,
    name: 'Kabir Bansal',
    gender: 'Male',
    language: 'Hindi',
    mobile: '5757575757',
    email: 'kabir30@example.com',
    deviceType: 'Organization',
    serviceType: 'Driver',
    organization: 'Springs Helpers',
    vehicleType: 'Bike',
    joinedDate: '2023-02-10'
  }
]
);
}

import { Component, signal, computed, HostListener, ChangeDetectionStrategy ,ChangeDetectorRef } from '@angular/core';
import { FormsModule, FormGroup } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Formdata } from '../../services/formdata';

@Component({
  selector: 'helper',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule, NgIf, NgFor],
  templateUrl: './helper.html',
  styleUrl: './helper.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Helper {
  AddForm!: FormGroup;
  sortedBy = 3;
  isVisible = signal<boolean>(false);
  isVisiblea = signal<boolean>(false);
  isVisibleb = signal<boolean>(false);
  defaultId = signal('');
  defaultData = computed(() =>
    this.data().find((item: { name: string }) => item.name === this.defaultId())
  );
  tempData = signal<any>([]);
  searchText = signal('');
  constructor(public fdata: Formdata, private readonly cdr: ChangeDetectorRef) {
    
    this.AddForm = this.fdata.AddForm;
    this.sortedBy = 3;
  }
  ngOnInit() {
    this.fdata.getUserData().subscribe((res: any) => {
      this.data.set(res);
      this.tempData.set(this.data().slice(0, 7));
      this.defaultId.set(this.data()[0].name);
    });
  }

  changeDef(name: string): void {
    this.defaultId.set(name);
  }
  Timer: any;
  SearchItem(): void {
    const input = this.searchText().toLowerCase().trim();
    clearTimeout(this.Timer);
    this.Timer = setTimeout(() => {
      if (input === '') {
        this.tempData.set([...this.data()]);
      } else {
        this.tempData.set(
          this.data().filter((item: { name: string }) =>
            item.name.toLowerCase().includes(input)
          )
        );
      }
    }, 1000);
    this.sortedBy = 3;
  }
  togglesort(got: number): void {
    this.sortedBy = got;
    if (this.sortedBy == 0) {
      this.tempData.set(
        this.tempData().sort((a: { name: string }, b: { name: any }) =>
          a.name.localeCompare(b.name)
        )
      );
    } else if (this.sortedBy == 1) {
      this.tempData.set(
        this.tempData().sort(
          (a: { empId: number }, b: { empId: number }) => a.empId - b.empId
        )
      );
    }
  }
  toggleVis(got: number): void {
    if (got == 1) this.isVisible.set(!this.isVisible());
    else if (got == 2) {
      this.isVisiblea.set(!this.isVisiblea());
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.sort-box') && !target.closest('#sort')) {
      this.isVisible.set(false);
    }
    if (!target.closest('.filter-box') && !target.closest('#filter')) {
      this.isVisiblea.set(false);
    }
    // if(!target.closest(''))
  }
  orgs = '';
  organizations = ['ASBL', 'SpringHelpers'];
  onCheckboxChange(event: Event): void {}
  data = signal<any>([]);

  deleteHelper(id: string): void {
    this.fdata.deleteUserById(id).subscribe((res) => {
      console.log(res);
      this.data.set(
        this.data().filter((item: { _id: string }) => item._id !== id)
      );
      this.tempData.set(this.tempData().filter((user: { _id: string; }) => user._id !== id));
        this.defaultId.set(this.data()[0].name);
    });
  }
}

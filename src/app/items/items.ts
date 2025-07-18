import { Component,signal } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule , FormsModule , RouterLink],
  templateUrl: './items.html',
  styleUrl: './items.css'
})
export class Items {
  pageNo= signal(0);;
  changePage(pgno:number): void {
    this.pageNo.set(pgno);
  }
}

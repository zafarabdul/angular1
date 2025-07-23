import { ChangeDetectionStrategy,ChangeDetectorRef, Component  } from '@angular/core';
import { CommonModule, NgIf, NgStyle } from '@angular/common';
import {Forms} from '../forms/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-add',
  standalone: true,
  imports: [NgIf, NgStyle, CommonModule ,Forms,RouterLink],
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class Add  {
  pageNo: number = 1;
}

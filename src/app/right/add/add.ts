import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';
import {NgIf,NgStyle} from '@angular/common';

@Component({
  selector: 'app-add',
  standalone : true,
  imports: [RouterLink,NgStyle],
  templateUrl: './add.html',
  styleUrl: './add.css'
})
export class Add {
  isHelper: boolean = true;
  isHelperCh(got:boolean):void{
    this.isHelper = got;
  }
}

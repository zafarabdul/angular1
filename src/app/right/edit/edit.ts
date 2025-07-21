import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-edit',
  imports: [RouterLink,NgStyle],
  templateUrl: './edit.html',
  styleUrl: './edit.css'
})
export class Edit {
  isHelper: boolean = true;
  isHelperCh(got:boolean):void{
    this.isHelper = got;
  }
}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-dailog',
  templateUrl: './mat-dailog.component.html',
  styleUrls: ['./mat-dailog.component.scss']
})
export class MatDailogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data)

  }
  vegetables = [
    {name: 'apple'},
    {name: 'banana'},
    {name: 'strawberry'},
    {name: 'orange'},
    {name: 'kiwi'},
    {name: 'cherry'},
  ];

}


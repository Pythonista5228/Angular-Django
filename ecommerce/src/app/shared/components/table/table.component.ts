import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {

  @Input() table_heading : [];
  @Input() table_data: any;
  tempData: any;

  constructor() {
   this.tempData = this.table_data;
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.tempData = this.table_data; 
  }

  serachProduct(searchValue: string): void {
    this.table_data = this.tempData;
    this.table_data = this.table_data.filter(e =>{
      return e.toString().includes(searchValue);
    });
  }
}
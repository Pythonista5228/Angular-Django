import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  code = 
  `{
    "name": "@risingstack/node-hero",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "node index.js"
    },
    "author": "",
    "license": "ISC"
  }
    `
}
// <pre>
// <code [highlight]="code"></code>
// </pre>
import { Component } from '@angular/core';
import {​​​​​​​​ ClientSideRowModelModule }​​​​​​​​ from '@ag-grid-community/client-side-row-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agGrid';
  modules = [ClientSideRowModelModule];
  columnDefs = [
    { field: "make", sortable:true}, 
    { field: "model", sortable:false}, 
    { field: "price", sortable:true}
  ];

  rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ];
}


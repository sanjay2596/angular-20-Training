import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  public employees=[
    {"id":1, "name":"Sanjay", "age":24},
    {"id":2, "name":"Manish", "age":23}
  ]
  constructor() { }

  ngOnInit() {
  }

}

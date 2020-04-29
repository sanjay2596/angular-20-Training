 import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
   getEmployees(){
     return(
      [
        {"id":1, "name":"sanjay", "age":24},
        {"id":2, "name":"manish", "age":23}
      ]
     )
     
   }
}

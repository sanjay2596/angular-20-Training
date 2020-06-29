import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-directive',
  templateUrl: './display-directive.component.html',
  styleUrls: ['./display-directive.component.css']
})
export class DisplayDirectiveComponent implements OnInit {
 
  public getBoolean = "false";
  public color="red";
  public colors= ["green", "yellow", "blue", "violet"];
  constructor() { }

  ngOnInit() {
  }

}

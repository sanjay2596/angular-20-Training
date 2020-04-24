import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styles: [`
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic;
  }
  `]
})
export class NewcomponentComponent implements OnInit {
  public isDisabled = true;

  public hasError = false;
  public isSpecial = true;

  public messageClasses = {
    "text-success":this.hasError,
    "text-danger":!this.hasError,
    "text-special":this.isSpecial
  }
  constructor() { }

  ngOnInit() {
  }

}

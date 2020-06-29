import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  greeting = 'interpolation concept';
  public title="sanjay";
  value = 0;
  message: string;
  
  increment() {
    if (this.value < 15) {
      this.value += 1;
      this.message = '';
      console.log(this.value);
    } else {
      this.message = 'Maximum reached!';
    }
  }
}

import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  @Input() public parentData;
  @Output() public childEvent = new EventEmitter;
  constructor() { }
  fireEvent(){
    this.childEvent.emit('hey how are you?')
  }
  public date = new Date();
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {
  message = 'click';
  constructor() { }

  ngOnInit() {
  }

  clicked() {
    this.message = 'stop';
  }

}

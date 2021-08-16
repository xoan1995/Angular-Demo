import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-book',
  template: "<h2>Let say hello {{title}}</h2>",
  templateUrl: './component-book.component.html',
  styleUrls: ['./component-book.component.css']
})
export class ComponentBookComponent implements OnInit {
  title = "List books";
  values = "";
  message = "";
  enterValue= "";
  constructor() { }
  ngOnInit(): void {
  }

  onClick() {
    this.message = " Đố anh bắt được em :)";
  }

  onKey(event: any) {
    // this.values = (<HTMLInputElement>event.target).value;
    this.values = event.target.value;
  }
  onEnter(value: string){
    this.enterValue = value;
  }
}
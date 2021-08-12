import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-book',
  template: "<h2>Let say hello {{title}}</h2>",
  templateUrl: './component-book.component.html',
  styleUrls: ['./component-book.component.css']
})
export class ComponentBookComponent implements OnInit {

  constructor() { }
  title = "List books";
  ngOnInit(): void {
  }
}
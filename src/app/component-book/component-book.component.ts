import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-component-book',
  templateUrl: './component-book.component.html',
  styleUrls: ['./component-book.component.css']
})
export class ComponentBookComponent implements OnInit {
  title = "List books";
  values = "";
  message = "";
  enterValue= "";
  ngModel: any;
  name: string = "";
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

  setName(){
    this.name = "Xoan";
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    console.log(form.valid);
  }
}
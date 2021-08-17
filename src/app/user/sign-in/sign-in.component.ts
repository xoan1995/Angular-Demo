import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUser } from '../userInterFace';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  flag = false;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });
  userList: IUser[] = [];
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private userService: UserService) { }
  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.userService.getUser().subscribe((data: IUser[]) => {
      this.userList = data;
    });
  }
  login() {
    let a = this.loginForm.value.email;
    let b = this.loginForm.value.password;
    for (let i = 0; i < this.userList.length; i++) {
      if (a == this.userList[i].email && b == this.userList[i].password) {
        this.route.navigate(['/books']);
        this.flag = true;
      }
    }
    if(this.flag == false){
      alert("wrong email or password!");
    }
  }
  getErrorMessage() {
    if (this.loginForm.value.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.loginForm.value.email.hasError('email') ? 'Not a valid email' : '';
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('author');
  }
  get f(){
    return this.loginForm.controls;
  }
}
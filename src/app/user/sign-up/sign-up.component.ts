import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {FormBuilder, Validators} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  signUpForm = this.fb.group({
    nickname: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });
  constructor(private userService: UserService,
              private fb: FormBuilder,
              private route: Router){}
  ngOnInit(){}
  createUser() {
    alert("Create new user!");
    const newUser = this.signUpForm.value;
    this.userService.add(newUser).subscribe(data => {
      this.route.navigate(['/books']);
    });
  } 
  get nickname() {
    return this.signUpForm.get('nickname');
  }
  get firstName() {
    return this.signUpForm.get('firstName');
  }
  get lastName() {
    return this.signUpForm.get('lastName');
  }
  get email() {
    return this.signUpForm.get('email');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get f(){
    return this.signUpForm.controls;
  }
}
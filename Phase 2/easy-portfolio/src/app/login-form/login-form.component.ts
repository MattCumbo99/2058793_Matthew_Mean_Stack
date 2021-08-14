import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginFlag:boolean = true;
  registerFlag:boolean = false;
  portfolioFlag:boolean = false;
  currentUser:string = "";
  constructor() { }

  ngOnInit(): void {
  }

  checkUser(loginRef:NgForm) {
    loginRef.reset();
  }

  addUser(registerRef:NgForm) {
    
  }

}

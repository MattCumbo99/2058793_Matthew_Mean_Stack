import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  checkUser(loginRef:NgForm) : void {
    let login = loginRef.value;
    //console.log(login);
    if (login.user=="Raj" && login.pass=="123") {
      // Load portfolio page
    }
    else {
      //this.msg = "Failed to login.";
    }
    loginRef.reset();
  }
}

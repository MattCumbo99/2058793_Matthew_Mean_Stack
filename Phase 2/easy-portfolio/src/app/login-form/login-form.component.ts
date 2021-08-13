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
  constructor() { }

  ngOnInit(): void {
  }

  openLogin() {
    this.loginFlag = true;
    this.registerFlag = false;
    this.portfolioFlag = false;
  }

  openRegistery() {
    this.loginFlag = false;
    this.registerFlag = true;
    this.portfolioFlag = false;
  }

  openPortfolio() {
    this.loginFlag = false;
    this.registerFlag = false;
    this.portfolioFlag = true;
  }

  checkUser(loginRef:NgForm) {
    let login = loginRef.value;
    //console.log(login);
    if (login.user=="Raj" && login.pass=="123") {
      //this.msg = "Successfully logged in!";
      this.openPortfolio();
    }
    else {
      //this.msg = "Failed to login.";
    }
    loginRef.reset();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'easy-portfolio';
  loginFlag:boolean = true;
  registerFlag:boolean = false;
  portfolioFlag:boolean = false;

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
}

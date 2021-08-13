import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.css']
})
export class PortfolioFormComponent implements OnInit {
  username:string = "Default User";
  constructor() { }

  ngOnInit(): void {
  }

  enterName(contact:NgForm) {
    let guy = contact.value;
    contact.reset();
  }
}

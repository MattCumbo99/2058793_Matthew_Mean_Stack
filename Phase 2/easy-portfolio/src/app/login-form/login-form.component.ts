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
  curUserFirstName:string = "";
  curUserLastName:string = "";
  userId:number = 0;
  accounts:{id:number, username:string, firstname:string, lastname:string, password:string}[] = [];
  // Contact id is associated with the account it belongs to
  contacts:{id:number, name:string, num:string}[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  checkUser(loginRef:NgForm) : void {
    let loginInfo = loginRef.value;
    for (let acc of this.accounts) {
      if (loginInfo.user == acc.username) {
        // Login successful
        if (loginInfo.pass == acc.password) {
          this.curUserFirstName = acc.firstname;
          this.curUserLastName = acc.lastname;
          this.userId = acc.id;
          this.toPortfolio();
          return;
        }
        else { // Username exists, but the password was wrong
          break;
        }
      }
    }
    // If we get here, there are no matching accounts
    alert("Incorrect username or password.");
  }

  addContact(contactRef:NgForm) : void {
    let contactInfo = contactRef.value;
    let contact = {id:this.userId, name:contactInfo.contactname, num:contactInfo.phone};

    this.contacts.push(contact);
    contactRef.reset();
    this.displayContacts();
  }

  // Display contacts in a table
  displayContacts() : void {
    let dataTable = document.getElementById("contact_list") as HTMLElement;
    let display:string = "";
    let exists:boolean = false;

    for (let contact of this.contacts) {
      // Found a contact belonging to the user
      if (contact.id == this.userId) {
        if (!exists) {
          display += "<br><table border='1' style='margin: 0 auto;'><tr><th>Contact Name</th><th>Phone Number</th></tr>";
          exists = true;
        }
        display += "<tr><td>" + contact.name + "</td><td>" + contact.num + "</td></tr>";
      }
    }

    if (!exists) {
      dataTable.innerHTML = "<h4>No contacts yet</h4>"
    }
    else {
      dataTable.innerHTML = display + "</table>";
    }
  }

  unloadContacts(): void {
    let dataTable = document.getElementById("contact_list") as HTMLElement;
    dataTable.innerHTML = "";
  }

  // Add an account
  addUser(registerRef:NgForm) : void {
    let regForm = registerRef.value;

    // Check for existing username
    for (let acc of this.accounts) {
      if (regForm.user == acc.username) {
        alert("Username already exists.");
        return;
      }
    }
    if (regForm.pass != regForm.repass) {
      alert("Passwords must match.");
      return;
    }

    // Add account
    let curAccount = {id:this.accounts.length, username:regForm.user, firstname:regForm.fname, lastname:regForm.lname, password:regForm.pass};
    this.accounts.push(curAccount);
    alert("Account created successfully!");
    this.toLogin();
  }

  toLogin() : void {
    this.loginFlag = true;
    this.registerFlag = false;
    this.portfolioFlag = false;
    this.unloadContacts();
  }
  toRegister() : void {
    this.loginFlag = false;
    this.registerFlag = true;
    this.portfolioFlag = false;
  }
  toPortfolio() : void {
    this.loginFlag = false;
    this.registerFlag = false;
    this.portfolioFlag = true;
    this.displayContacts();
  }

}

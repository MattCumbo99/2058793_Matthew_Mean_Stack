import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { PortfolioFormComponent } from './portfolio-form/portfolio-form.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    PortfolioFormComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

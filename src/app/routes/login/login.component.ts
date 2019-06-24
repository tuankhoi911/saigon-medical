import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})


export class LoginComponent implements OnInit {

  isEmailValidated: boolean = false;
  user = {
    username: '',
    password: ''
  }
  error = false;
  pbLogo = 'assets/images/pbLogo.png';

  constructor(public router: Router, private loginService: LoginService) { }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let result = re.test(String(email).toLowerCase());
    this.isEmailValidated = result;
    return result;
  }

  emailLogin() {
    this.loginService
      .login(this.user)
      .subscribe((jwt: any) => {
        localStorage.setItem(environment.accessToken, jwt.accessToken)
        localStorage.setItem(environment.role, jwt.role)
        if (environment.accessToken) {
          this.router.navigate(['/admin']);
          this.error = false;
        }
      }, (error) => {
        this.error = true;
      })
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
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
  pbLogo = 'assets/images/logo-2.png';
  isLoading = false;

  constructor(public router: Router, private loginService: LoginService) {
    router.events.subscribe((event: Event) => {

      if (event instanceof NavigationStart) {
        this.isLoading = true;
      }

      if (event instanceof NavigationEnd) {
        this.isLoading = false;
      }
    });
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let result = re.test(String(email).toLowerCase());
    this.isEmailValidated = result;
    return result;
  }

  // emailLogin() {
  //   this.loginService
  //     .login(this.user)
  //     .subscribe((jwt: any) => {
  //       localStorage.setItem(environment.accessToken, jwt.accessToken)
  //       localStorage.setItem(environment.role, jwt.role)
  //       if (environment.accessToken) {
  //         this.router.navigate(['/admin']);
  //         this.error = false;
  //       }
  //     }, (error) => {
  //       this.error = true;
  //     })
  // }

  emailLogin() {
    this.router.navigate(['/admin']);
  }

  ngOnInit() {
  }

}

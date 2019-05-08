import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  isEmailValidated: boolean = false;
  email = '';
  password = '';
  error = false;
  pbLogo = 'assets/images/pbLogo.png';

  constructor(public router: Router) { }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let result = re.test(String(email).toLowerCase());
    this.isEmailValidated = result;
    return result;
  }

  emailLogin() {
        this.router.navigate(['/admin']);
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  isHidden = false;

  users = [
    {
      name: 'Vinsmoke Sanji',
      img: 'assets/images/sanji.png',
      address: 'Osaka, Japan',
      date: '11/7/1984',
      arrive: '19/5/2019',
      phone: '01254125124',
      doctor: 'Vinsmoke Reiju'
    },
    {
      name: 'Vinsmoke Sanji',
      img: 'assets/images/sanji.png',
      address: 'Osaka, Japan',
      date: '11/7/1984',
      arrive: '19/5/2019',
      phone: '01254125124',
      doctor: 'Vinsmoke Reiju'
    },
    {
      name: 'Vinsmoke Sanji',
      img: 'assets/images/sanji.png',
      address: 'Osaka, Japan',
      date: '11/7/1984',
      arrive: '19/5/2019',
      phone: '01254125124',
      doctor: 'Vinsmoke Reiju'
    },
    {
      name: 'Vinsmoke Sanji',
      img: 'assets/images/sanji.png',
      address: 'Osaka, Japan',
      date: '11/7/1984',
      arrive: '19/5/2019',
      phone: '01254125124',
      doctor: 'Vinsmoke Reiju'
    },
    {
      name: 'Vinsmoke Sanji',
      img: 'assets/images/sanji.png',
      address: 'Osaka, Japan',
      date: '11/7/1984',
      arrive: '19/5/2019',
      phone: '01254125124',
      doctor: 'Vinsmoke Reiju'
    },
    {
      name: 'Vinsmoke Sanji',
      img: 'assets/images/sanji.png',
      address: 'Osaka, Japan',
      date: '11/7/1984',
      arrive: '19/5/2019',
      phone: '01254125124',
      doctor: 'Vinsmoke Reiju'
    },
    {
      name: 'Vinsmoke Sanji',
      img: 'assets/images/sanji.png',
      address: 'Osaka, Japan',
      date: '11/7/1984',
      arrive: '19/5/2019',
      phone: '01254125124',
      doctor: 'Vinsmoke Reiju'
    },
  ]


  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if ((router.url === '/admin/patient/add-patient') || (router.url === '/admin/patient/add-examination')) {
          this.isHidden = false;
        } else {
          this.isHidden = true;
        }
      }
    })
  }

  ngOnInit() {
  }

}

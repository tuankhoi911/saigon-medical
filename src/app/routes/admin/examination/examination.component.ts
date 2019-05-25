import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.scss']
})
export class ExaminationComponent implements OnInit {

  isHidden = false;


  users = [
    {
      name: 'Vinsmoke Sanji',
      img: 'assets/images/sanji.png',
      address: 'Osaka, Japan',
      date: '11/7/1984',
      arrive: '19/5/2019',
      status: 'Đang chờ',
      doctor: 'Vinsmoke Reiju'
    },
    {
      name: 'Vinsmoke Sanji',
      img: 'assets/images/sanji.png',
      address: 'Osaka, Japan',
      date: '11/7/1984',
      arrive: '19/5/2019',
      status: 'Đã khám',
      doctor: 'Vinsmoke Reiju'
    },
    {
      name: 'Vinsmoke Sanji',
      img: 'assets/images/sanji.png',
      address: 'Osaka, Japan',
      date: '11/7/1984',
      arrive: '19/5/2019',
      status: 'Đang chờ',
      doctor: 'Vinsmoke Reiju'
    },
    {
      name: 'Vinsmoke Sanji',
      img: 'assets/images/sanji.png',
      address: 'Osaka, Japan',
      date: '11/7/1984',
      arrive: '19/5/2019',
      status: 'Đang chờ',
      doctor: 'Vinsmoke Reiju'
    },
    {
      name: 'Vinsmoke Sanji',
      img: 'assets/images/sanji.png',
      address: 'Osaka, Japan',
      date: '11/7/1984',
      arrive: '19/5/2019',
      status: 'Đã khám',
      doctor: 'Vinsmoke Reiju'
    },
    {
      name: 'Vinsmoke Sanji',
      img: 'assets/images/sanji.png',
      address: 'Osaka, Japan',
      date: '11/7/1984',
      arrive: '19/5/2019',
      status: 'Đang chờ',
      doctor: 'Vinsmoke Reiju'
    },
    {
      name: 'Vinsmoke Sanji',
      img: 'assets/images/sanji.png',
      address: 'Osaka, Japan',
      date: '11/7/1984',
      arrive: '19/5/2019',
      status: 'Đã khám',
      doctor: 'Vinsmoke Reiju'
    },
  ]
  // viewDetail() {
  //   this.isHidden = !this.isHidden;
  // }

  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (router.url != '/admin/examination') {
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

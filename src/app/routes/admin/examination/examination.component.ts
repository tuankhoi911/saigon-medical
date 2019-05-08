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
      name: 'Monkey D Luffy',
      phone: '0123456789', birth: '25-11-1999',
      img: 'assets/images/luffy.png',
      no: '000001', sex: 'other', blood: '14:00:00', sick: '30 minutes', email: 'Hematology'
    },
    {
      name: 'Charllote Nami',
      phone: '0123456789', birth: '25-11-1999',
      img: 'assets/images/user.jpg',
      no: '000001', sex: 'other', blood: '14:00:00', sick: '30 minutes', email: 'Hematology'
    },
    {
      name: 'Nico Robin',
      phone: '0123456789', birth: '25-11-1999',
      img: 'assets/images/robin.png',
      no: '000001', sex: 'other', blood: '14:00:00', sick: '30 minutes', email: 'Hematology'
    },
    {
      name: 'Vinsmoke Sanji',
      phone: '0123456789', birth: '25-11-1999',
      img: 'assets/images/sanji.png',
      no: '000001', sex: 'other', blood: '14:00:00', sick: '30 minutes', email: 'Hematology',
    },
    {
      name: 'Roronoa Zoro',
      phone: '0123456789', birth: '25-11-1999',
      img: 'assets/images/zoro.png',
      no: '000001', sex: 'other', blood: '14:00:00', sick: '30 minutes', email: 'Hematology'
    },
    {
      name: 'God Usopp',
      phone: '0123456789', birth: '25-11-1999',
      img: 'assets/images/usopp.png',
      no: '000001', sex: 'other', blood: '14:00:00', sick: '30 minutes', email: 'Hematology'
    }
  ]

  // viewDetail() {
  //   this.isHidden = !this.isHidden;
  // }

  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (router.url === '/admin/examination/add-examination') {
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

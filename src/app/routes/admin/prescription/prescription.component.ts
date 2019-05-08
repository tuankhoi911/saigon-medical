import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss']
})
export class PrescriptionComponent implements OnInit {

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
        if (router.url === '/admin/prescription/add-prescription') {
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

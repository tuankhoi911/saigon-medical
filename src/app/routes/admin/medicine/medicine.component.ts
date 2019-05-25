import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {


  isHidden = false;
  isPopup = false;
  logo = 'assets/images/pbLogo.png'

  users = [
    {
      name: 'Paracetamol 500mg',
      img : 'assets/images/para.jpg',
      amount: '500 ',
      price: '200,000',
      nsx: '20/10/2017',
      hsd: '20/10/2022',
      unit: 'Viên'
    },
    {
      name: 'Paracetamol 500mg',
      img : 'assets/images/para.jpg',
      amount: '500 ',
      price: '200,000',
      nsx: '20/10/2017',
      hsd: '20/10/2022',
      unit: 'Viên'
    },
    {
      name: 'Paracetamol 500mg',
      img : 'assets/images/para.jpg',
      amount: '500 ',
      price: '200,000',
      nsx: '20/10/2017',
      hsd: '20/10/2022',
      unit: 'Viên'
    },
    {
      name: 'Paracetamol 500mg',
      img : 'assets/images/para.jpg',
      amount: '500 ',
      price: '200,000',
      nsx: '20/10/2017',
      hsd: '20/10/2022',
      unit: 'Viên'
    },
    {
      name: 'Tatanol 500mg',
      img : 'assets/images/para.jpg',
      amount: '500 ',
      price: '200,000',
      nsx: '20/10/2017',
      hsd: '20/10/2022',
      unit: 'Viên'
    },
    {
      name: 'Paracetamol 500mg',
      img : 'assets/images/para.jpg',
      amount: '500 ',
      price: '200,000',
      nsx: '20/10/2017',
      hsd: '20/10/2022',
      unit: 'Viên'
    },
    {
      name: 'Aspirin 500mg',
      img : 'assets/images/para.jpg',
      amount: '500 ',
      price: '200,000',
      nsx: '20/10/2017',
      hsd: '20/10/2022',
      unit: 'Viên'
    },
  ]

  searchedUsers = this.users;


  // viewDetail() {
  //   this.isHidden = !this.isHidden;
  // }

  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (router.url === '/admin/medicine/add-medicine') {
          this.isHidden = false;
        } else {
          this.isHidden = true;
        }
      }
    })
  }

  show() {
    this.isPopup = true;
  }

  close() {
    this.isPopup = false;
  }

  ngOnInit() {
  }

  public searchUpdate(term: string): void {
    term = term.trim().toLowerCase();
    const isMatch = (user: any) => user.name.toLowerCase().includes(term); 

    if (term == "") {
      this.searchedUsers = this.users;
    }
    this.searchedUsers = this.users.filter(isMatch);
  }
}

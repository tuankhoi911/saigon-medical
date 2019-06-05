import { Component, OnInit } from '@angular/core';
// import { TodoDataService } from "../../services/todoData.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // providers: [TodoDataService]
})
export class HomeComponent implements OnInit {

  pbLogo = 'assets/images/pbLogo.png';


  constructor() { }

  ngOnInit() {
    //   this.todoDataService
    //     .getAllTodos()
    //     .subscribe(
    //       // (todos) => {
    //       //   this.patients = todos;
    //       // }
    //     logObj('todo')
    //     );
  }
}

// function logObj(name) {
//   return {
//     next: x => console.log(`${ name }`, `next`, x),
//     error: err => console.log(`${ name }`, `error`, err),
//     completed: () => console.log(`${ name }`, `completed`)
//   }
// }
// var user = this.http.get(url).subsribe(logObj('ret'));
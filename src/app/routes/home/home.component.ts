import { Component, OnInit } from '@angular/core';
import { TodoDataService } from "../../services/todoData.service";
import { Todo } from "../../models/todo";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [TodoDataService]
})
export class HomeComponent implements OnInit {

  pbLogo = 'assets/images/pbLogo.png';

  patients: Todo[] = [];

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit() {
    this.todoDataService
      .getAllTodos()
      .subscribe(
        (todos) => {
          this.patients = todos;
        }
      );
  }
}

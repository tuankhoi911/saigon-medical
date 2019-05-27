import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
// import { Http } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Todo } from "../models/todo";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Base Api service

  constructor(private http: HttpClient) { }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  // API: GET /todos
  public getAllTodos(): Observable<Todo[]> {
    return this.http
      .get(API_URL + '/todos')
      .pipe(
        map((response : any[]) => {
          const todos = response;
          return todos.map((todo) => new Todo(todo));
        })
      )
  }

  // API: POST /todos
  public createTodo(todo: Todo): Observable<Todo> {
    return this.http
      .post(API_URL + '/todos', todo)
      .pipe(
        map(response => {
            return new Todo(response);
        })
      )
  }

  // API: GET /todos/:id
  public getTodoById(todoId: number): Observable<Todo> {
    return this.http
      .get(API_URL + '/todos/' + todoId)
      .pipe(
        map(response => {
          return new Todo(response);
        })
      )
  }

//  API: PUT /todos/:id
  public updateTodo(todo: Todo): Observable<any> {
    return this.http
      .put(API_URL + '/todos/' + todo.id, todo)
      // .map(response => {
      //   return new Todo(response);
      // })
      // .catch(this.handleError);
  }

  // DELETE /todos/:id
  public deleteTodoById(todoId: number): Observable<any> {
    return this.http
      .delete(API_URL + '/todos/' + todoId)
      // .map(response => null)
      // .catch(this.handleError);
  }
 }

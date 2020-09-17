import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './../../model/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=8';

  constructor(private http: HttpClient) {}

  // Get todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl + this.todosLimit);
  }

  // Toggle Completed
  toggleCompleted(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`; // the url for the PUT request
    return this.http.put<Todo>(url, todo, httpOptions);
  }

  // delete todo
  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`; // the url for the DELETE request
    return this.http.delete<Todo>(url, httpOptions);
  }

  // Add Todo
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }
}

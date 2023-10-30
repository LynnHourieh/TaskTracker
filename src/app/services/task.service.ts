import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http"
import { TASKS } from '../mock-tasks';
import { Task } from '../components/Task';
import {Observable , of } from "rxjs"
// The @Injectable decorator is used to tell Angular that a class can be injected with dependencies.
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // Service methods and properties go here

  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:5000/tasks';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  // observables are commonly used for tasks like making HTTP requests to fetch data from a server, handling user interactions, managing application state, and working with real-time data. Angular's HTTP client, forms, and router all use observables for these reasons.

  //  The Observable<Task[]> type indicates that this method will emit an array of Task objects asynchronously.
  getTasks(): Observable<Task[]> {
    // The of function is used from the RxJS library to create an observable that emits a single value. In this case, it emits the TASKS array, which presumably contains a list of tasks.
    // const tasks = of(TASKS);
    // console.log(tasks);
    // return tasks;
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    //task is the data to be send in the request body
    return this.http.put<Task>(url, task, this.httpOptions);
  }
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, this.httpOptions);
  }
}


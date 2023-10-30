import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class UiService {
private showAddTask:boolean=false
private subject =new Subject <any>();

  constructor() { }
  toggleAddTask():void{
    //console.log("click")
    this.showAddTask=!this.showAddTask;
    this.subject.next(this.showAddTask)
  }
  onToggle():Observable<any>{
    //convert subject to observable
    return this.subject.asObservable()
  }
}


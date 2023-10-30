import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../Task';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  // define task props as task
  @Input() test!: Task;
  //specifying the type of data that the onDeleteTask output property can emit.This means that when you use this output property to emit an event, you are expected to provide a value of type Task.

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onReminderTask: EventEmitter<Task> = new EventEmitter();
  onDelete(test: Task) {
    //notify task-component that onDelete task is emitted
    this.onDeleteTask.emit(test);
  }
  onReminder(test: Task) {
    this.onReminderTask.emit();
  }
  faXmark = faXmark;
}

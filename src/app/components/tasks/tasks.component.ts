import { Component } from '@angular/core';
// import { TASKS } from 'src/app/mock-tasks';
import { Task } from '../Task';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  // Task[] for interface
  //TASKS object
  // tasks:Task[]=TASKS;
  tasks: Task[] = [];

  //to use taskService we should definr it in the constructor 
  constructor(private taskService: TaskService) {}
  // The ngOnInit method, which is an Angular lifecycle hook, is implemented. This hook is called once the component is initialized
  //useEffect
  ngOnInit(): void {
    // this.tasks=this.taskService.getTasks()
    this.taskService.getTasks().subscribe((fetchedTasks) => {
      console.log(this.tasks) //empty
      this.tasks = fetchedTasks;
      console.log(this.tasks);
    });

  
  }

  deleteTask(task: Task) {
    this.taskService
      // deleteTask from server
      .deleteTask(task)
      .subscribe(
        // When the deletion is successful, the code inside the callback function is executed.
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
  reminderTask(task:Task){
   task.reminder = !task.reminder;
   this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task:Task){
        this.taskService
          .addTask(task)
          .subscribe((task) => this.tasks.push(task));
  }
}
 

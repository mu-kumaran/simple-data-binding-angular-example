import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  taskLists = [
    { id: 1, title: "Learn Angular", description: "Practice components and binding" },
    { id: 2, title: "Build Task Manager", description: "Use @for and @if syntax" },
    { id: 3, title: "Review Project", description: "Test and debug app" }
  ]

  @Output() tasks = new EventEmitter<any>();

  sendTask(task: any){
    return this.tasks.emit(task)
  }
}

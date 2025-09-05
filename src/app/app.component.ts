import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { TaskDetailsComponent } from "./task-details/task-details.component";


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, FormsModule, ParentComponent, UserListComponent, UserDetailComponent, TaskListComponent, TaskDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Interpolation {{}}
  title = 'Angular!!!';
  greet = 'Hello Angular!!!';

  // Property binding []
  imageURL = "https://angular.io/assets/images/logos/angular/angular.png";

  // Event binding ()
  count = 0;
  increase(){
    this.count++
    //return this.count++
  }

  // Two way binding [()]
  name = 'manoj'

  // get() or getter method
  get nameplustitle(): string{
    return this.name+"  "+this.title;
  }

  // User-list and User-detail components
  // replying for @Input and @Output components from user-list and user-detail
  userSelected = ''
  receiveUser(user:string){
    this.userSelected = user;
  }

  // Task-list and Task-detail components
  // replying for @Input and @Output components from task-list and task-detail
  taskSelected: any;
  receiveTasks(task: any){
    this.taskSelected = task
  }

}

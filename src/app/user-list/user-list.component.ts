import { Component, EventEmitter, Output } from '@angular/core';
import {CommonModule,NgFor} from '@angular/common';
@Component({
  selector: 'app-user-list',
  standalone:true,
  imports: [CommonModule,NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
    userList = ["Alice","Bob","Marley"]
    @Output() users = new EventEmitter<string>();

    sendUser(user:string){
      this.users.emit(user)
    }

    get getTotalUserList():number{
      return this.userList.length;
    }
}

import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  standalone:true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  msgToChild = "Hello My Child!!! How are you???"
  msgFromChild = ""

  receiveMsg(msg:string){
    this.msgFromChild = msg;
  }

  get combinedMessage():string {
      return this.msgToChild+"|"+this.msgFromChild;
  }
}

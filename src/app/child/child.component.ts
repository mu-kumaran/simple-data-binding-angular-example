import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone:true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() sendMessage = new EventEmitter<string>();  //Send message to parent
  @Input() message! : string; // receives input from parent
  

  senderBox(){
    this.sendMessage.emit("Hello parent!!! I am Fine...")
  }
}

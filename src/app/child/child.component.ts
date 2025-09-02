import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() message! : string; // receives input from parent
  @Output() informParent = new EventEmitter<string>();

  sendMessage(){
    this.informParent.emit("Hello parent!!! I am fine...")
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,ChildComponent,ParentComponent],
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
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ClientApp';
  helloWorld: string = "Hello World!";
  //string interpolation
  clicked: number = 0;
  doubleClicked: number = 0;

  // willShowBlock: boolean = true;
     willShowBlock: boolean = false;
  
    incrementClicked(){
      this.clicked += 1;
    }

    incrementDoubleClicked(){
      this.doubleClicked += 1;
    }

  
}

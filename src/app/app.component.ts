import { Component, HostListener } from '@angular/core';

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

     willContextMenuShow: boolean = false;

     contextMenuInfo: any = {
      pageX: 0,
      pageY: 0,
      willContextMenuShow: false, 
     }

     contextClicked:boolean = false;


     valuesToLoopThrough: number[] = [
      4, 
      2,
      5,
      8,
     ];
  
    incrementClicked(){
      this.clicked += 1;
    }

    incrementDoubleClicked(){
      this.doubleClicked += 1;
    }

    toggleConextMenu(showContextMenu: boolean, event: MouseEvent | null = null) {
      console.log(event);
      if (event !== null){
      this.contextMenuInfo.pageX = event.pageX;
      this.contextMenuInfo.pageY = event.pageY;
      }
      this.willContextMenuShow = showContextMenu;
    }

    @HostListener("document:click")
    closeContextMenu(){
      this.toggleConextMenu(false);
    }

    contextClick(){
      this.contextClicked = true;
      setTimeout(() => {
        this.contextClicked = false;
      }, 20)
    }
}

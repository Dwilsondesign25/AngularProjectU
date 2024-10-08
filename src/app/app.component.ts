import { Component, HostListener, OnInit } from '@angular/core';
import { UserService } from './services/user-service.service';
import { AuthService } from './services/auth-service.service';
import { TokenResponse } from './models/TokenResponse.model';
import { Router } from '@angular/router';
import { User } from './models/User.model';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  willShowUsers: boolean = true;

  title = 'ClientApp';
  helloWorld: string = "Hello World";
  //string interpolation
  clicked: number = 0;
  doubleClicked: number = 0;

  // willShowBlock: boolean = true;
  willShowBlock: boolean = false;

  contextMenuInfo: any = {
      pageX: 0,
      pageY: 0,
      willShow: false
  }

  tooltipInfo: any = {
      pageX: 0,
      pageY: 0,
      willShow: false
  }

  contextClicked: boolean = false;

  valuesToLoopThrough: number[] = [
      4, 
      2,
      5,
      8
  ];

  textColorForChange: string = "purple";

  constructor(
      public userService: UserService,
      public authService: AuthService,
      private router: Router,
  ) {}

  ngOnInit(): void {
    this.checkAuth();
    this.subscribeAuthHasChanged();
}

subscribeAuthHasChanged() {
    this.authService.authHasChanged.subscribe(() => {
        this.getUsersForMap();
    })
}

getUsersForMap() {
    this.userService.getUsers().subscribe({
    next: (res: User[]) =>{
            this.userService.userMapping = {};
            res.forEach((row, i)=>{
                this.userService.userMapping[row.userId] = row.username;
                // if (i === res.length - 1){
                //     console.log(this.userService.userMapping);
                // }
            })
        }
    })
}

goToMyProfile(){
    this.router.navigate(["user/", this.authService.userId]);
}


goToPosts(){
    this.router.navigate(["posts"]);
}

goToUsers(){
    this.router.navigate(["user"]);
}

checkAuth(){
    let token = localStorage.getItem("token");
    if (token){
        this.authService.isAuthenticated = true;
        this.authService.token = token;
        this.authService.getRefreshToken().subscribe({
        next: (res: TokenResponse) => {
            this.authService.handleLogin(res.token);
            },
        error: (err) => {
                console.log(err);
                this.authService.logout();
            }
        })
    }
}

  triggerColorChange() {
      this.userService.colorHasChanged.next(this.textColorForChange);
  }

  incrementClicked() {
      this.clicked += 1;
  }

  incrementDoubleClicked() {
      this.doubleClicked += 1;
  }

  toggleContextMenu(showContextMenu: boolean, event: MouseEvent | null = null) {
    //   console.log(event);
      if (event !== null) {
          event.preventDefault();
          this.contextMenuInfo.pageX = event.pageX
          this.contextMenuInfo.pageY = event.pageY
      }
      this.contextMenuInfo.willShow = showContextMenu;
  }

  @HostListener("document:click")
  closeContextMenu(){
      setTimeout(() => {
          if (!this.contextClicked){
              this.toggleContextMenu(false);
          }
      }, 10)
  }

  contextClick() {
      this.contextClicked = true;
      setTimeout(() => {
          this.contextClicked = false;
      }, 20)
  }

  onMouseMove(inside: boolean, event: MouseEvent) {
      if (this.tooltipInfo.willShow !== inside) {
          this.tooltipInfo.willShow = inside;
      }
      this.tooltipInfo.pageX = event.pageX - 50;
      this.tooltipInfo.pageY = event.pageY + 15;
    //   console.log(event);
  }

  setShowUsers(showUsers: boolean) {
      this.willShowUsers = showUsers;
  }

}
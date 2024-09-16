import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../models/User.model';
import { UserService } from '../../services/user-service.service';
import { ActivatedRoute } from '@angular/router'; 



@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit, OnDestroy {
  // @Input() user: string = "";
  @Input() addMode: boolean = false;
  @Input() userIndex: number = -1;
  userId: number = -1;
  // @Output() deleteUser: EventEmitter<number> = new EventEmitter<number>();
  editMode: boolean = false;
  displayUser: boolean = false;
  userForEdit!: User;
  userForDisplay!: User;

  textColor: any = {
      color: "black"
  }
  colorHasChangedSubscription: Subscription = new Subscription();

constructor(
    public userService: UserService,
    private route: ActivatedRoute,
) { }

  ngOnInit(): void {
      this.userForEdit = {...this.userService.emptyUser};
      this.colorHasChangedSubscription = this.userService.colorHasChanged.subscribe((newColor) => {
          console.log(newColor);
          this.textColor.color = newColor;
          this.setUserForDisplay();
      })
  }

  setUserForDisplay() {
    if (this.userIndex !== -1) {
        this.userForDisplay = this.userService.userList[this.userIndex];
        this.displayUser = true;
    }
}

  subscribeParams(params: any): void {
    this.route.params.subscribe(params => {
        console.log(params ["user Id"]);  
        if (params["userId"]) {
        this.userId = params["userId"];
        // this.displayUser = true;
        }
    });
  }

  toggleEdit(editMode: boolean, user: User = { ...this.userService.emptyUser }) {
      this.editMode = editMode;
      this.userForEdit = { ...user };
      if (!editMode) {
          this.userService.usersHaveChanged.next(true);
      }
  }

  submitEdit() {
      if (this.addMode) {
        this.userService.addUser(this.userForEdit);
      } else {
          this.editMode = false;
        this.userService.editUser(this.userForEdit);
      }
  }

  ngOnDestroy(): void {
      this.colorHasChangedSubscription.unsubscribe();
  }
}
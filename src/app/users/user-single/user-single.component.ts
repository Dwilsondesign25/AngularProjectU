import { Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { UserService } from '../../services/user-service.service';
import { Subscription } from 'rxjs';
import { User } from '../../models/User.model';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrl: './user-single.component.css'
})
export class UserSingleComponent implements OnInit, OnDestroy {
  // @Input() user: string = ""; 
  @Input() userIndex: number = -1; 
  // @Output() deleteUser: EventEmitter<number> = new EventEmitter<number>();
  editMode: boolean = false;
  userForEdit: User = {
    userId: 0,
    username: "",
    fullName: "",
    city: "",
    gender: "",
    favoriteColor: "",
    favoriteAnimal: "",
  };

  textColor: any = {
      color: "white"
  }
  colorHasChangedSubscription: Subscription = new Subscription();


  constructor(
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.colorHasChangedSubscription = this.userService.colorHasChanged.subscribe((newColor) => {
      console.log(newColor)  
      this.textColor.color = newColor;
    })
  }

  toggleEdit(editMode: boolean, user: User){
    this.editMode = editMode;
    this.userForEdit = user;
  }

  submitEdit(){
    this.editMode = false;
    this.userService.editUser(this.userForEdit, this.userIndex);
  }

  ngOnDestroy(): void {
    this.colorHasChangedSubscription.unsubscribe();
  }
}

import { Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../models/User.model';
import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrl: './user-single.component.css'
})
export class UserSingleComponent implements OnInit, OnDestroy {
  // @Input() user: string = ""; 
  @Input() addMode: boolean = false; 
  @Input() userIndex: number = -1;
  // @Output() deleteUser: EventEmitter<number> = new EventEmitter<number>();
  editMode: boolean = false;
  userForEdit!: User;

  textColor: any = {
      color: "black",
  }
  colorHasChangedSubscription: Subscription = new Subscription();


  constructor(
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.userForEdit = {...this.userService.emptyUser};
    this.colorHasChangedSubscription = this.userService.colorHasChanged.subscribe((newColor) => {
      console.log(newColor)  
      this.textColor.color = newColor;
    })
  }

  toggleEdit(editMode: boolean, user: User  = {...this.userService.emptyUser}) {
    this.editMode = editMode;
    this.userForEdit = {...user};
  }

  submitEdit(){
    if(this.addMode){

    } else {

    
    this.editMode = false;
    this.userService.editUser(this.userForEdit, this.userIndex);
  }
}

  ngOnDestroy(): void {
    this.colorHasChangedSubscription.unsubscribe();
  }
}

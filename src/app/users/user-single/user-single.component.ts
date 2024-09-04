import { Component, EventEmitter, Input, Output} from '@angular/core';
import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrl: './user-single.component.css'
})
export class UserSingleComponent {
  // @Input() user: string = ""; 
  @Input() userIndex: number = -1; 
  // @Output() deleteUser: EventEmitter<number> = new EventEmitter<number>();
  editMode: boolean = false;
  userForEdit: string = "";

  
  constructor(
    public userService: UserService
  ) {}

  toggleEdit(editMode: boolean, user: string =""){
    this.editMode = editMode;
    this.userForEdit = user;
  }

  submitEdit(){
    this.userService.editUser(this.userForEdit, this.userIndex);
  }
}

import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrl: './user-single.component.css'
})
export class UserSingleComponent implements OnInit {
  // @Input() user: string = ""; 
  @Input() userIndex: number = -1; 
  // @Output() deleteUser: EventEmitter<number> = new EventEmitter<number>();
  editMode: boolean = false;
  userForEdit: string = "";
  textColor: any = {
      color: "white"
  }
  
  constructor(
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.colorHasChanged.subscribe(() => {
        this.textColor.color = "purple";
    })
  }

  toggleEdit(editMode: boolean, user: string =""){
    this.editMode = editMode;
    this.userForEdit = user;
  }

  submitEdit(){
    this.userService.editUser(this.userForEdit, this.userIndex);
  }
}

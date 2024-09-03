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


  
  constructor(
    public userService: UserService
  ) {}
}

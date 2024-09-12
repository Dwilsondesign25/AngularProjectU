import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../services/user-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/User.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css', '../app.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  testUser = "Test User"
  // userList = [
  //   "Tucker Anselm",
  //   "Elmira Keddy",
  //   "Eveline Grandisson",
  //   "Berry Wildes",
  //   "Quintus Hastings",
  //   "Harp Antonignetti",
  //   "Vite Playfair",
  //   "Noelle Dowears",
  //   "Delcine Lubbock",
  //   "Auberta Skerrett",
  //   "Constantin Cosgry",
  //   "Loleta Grenfell",
  //   "Nadeen Matchett",
  //   "Elli Galliver",
  //   "Gayla Hawtin",
  //   "Liam Antwis",
  //   "Merilyn Baumford",
  //   "Lilas Colquyte",
  //   "Roi Kinworthy",
  //   "Patin Flecknoe",
  //   "Etienne Vedeneev",
  //   "Diane Evesque",
  //   "Ashlee Amoore",
  //   "Julissa Bandey",
  //   "Merridie McPartling",
  //   "Nanete Kitlee"        
  // ];


    constructor(
      public userService: UserService
    ) {}

    ngOnInit(): void {
      this.userService.getUsers().subscribe({
        next: (res: User[]) => {
          this.userService.userList = res;
          //   console.log(this.userService.userList);
          //   res.forEach((row: User) => {
          //     console.log(row.username + "" + row.city);
          //   });
          //   console.log(res);
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
        }
      });
      console.log("component has been initialized");
    }
    
    ngOnDestroy(): void {
      console.log("component has been destroyed");
    }
    
    // removeUser(index: number) {
    //   this.userService.userList.splice(index, 1);
    // }
    
  }
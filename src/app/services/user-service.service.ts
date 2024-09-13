import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/User.model";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  colorHasChanged: Subject<string> = new Subject<string>(); 
  usersHaveChanged: Subject<boolean> = new Subject<boolean>(); 
  userList: User[]= [];
  emptyUser: User = {
    userId: 0,
    username: "",
    fullName: "",
    city: "",
    gender: "",
    favoriteColor: "",
    favoriteAnimal: "",
  };

    // userList = [
    //     "Drew Wilson",
    //     "Elmira Keddy",
    //     "Eveline Grandisson",
    //     "Berry Wildes",
    //     "Quintus Hastings",
    //     "Harp Antonignetti",
    //     "Vite Playfair",
    //     "Noelle Dowears",
    //     "Dunoggota Lubbock",
    //     "Auberta Skerrett",
    //     "Constantin Cosgry",
    //     "Loleta Grenfell",
    //     "Nadeen Matchett",
    //     "Elli Galliver",
    //     "Gayla Hawtin",
    //     "Liam Antwis",
    //     "Merilyn Baumford",
    //     "Lilas Colquyte",
    //     "Roi Kinworthy",
    //     "Patin Flecknoe",
    //     "Etienne Vedeneev",
    //     "Diane Evesque",
    //     "Ashlee Amoore",
    //     "Julissa Bandey",
    //     "Merridie McPartling",
    //     "Nanete Kitlee"        
      // ];

      constructor(
        public httpServ: HttpClient
      ) {}

      getUsers(){
       return this.httpServ.get<User[]>("http://localhost:3000/user/users")
      }

      removeUser(userId: number){
          // this.userList.splice(index, 1);
          if (confirm("Are you sure you want to delete this user?"))
            this.deleteUser(userId).subscribe({
              next: () => {
                alert("The delete was successful!");
                this.usersHaveChanged.next(false);
              },
              error: (err) => {
                alert("This user delete edit failed! Please try again later.");
              }
          })
      }
      
      addUser(user: User){
        // this.userList[index] = user;
        this.postUser(user).subscribe({
          next: () => {
            alert("Adding a User was successfully!");
            this.usersHaveChanged.next(false);
           },
          error: (err) => {
            alert("Adding the user failed! Please try again later.");
          }
        })
    }


      editUser(user: User){
          // this.userList[index] = user;
          this.putUser(user).subscribe({
            next: () => {
              alert("User edited successfully!");
              this.usersHaveChanged.next(false);
             },
            error: (err) => {
              alert("This user edit failed! Please try again later.");
            }
          })
      }

      postUser(userForAdd: User){
        return this.httpServ.post("http://localhost:3000/user/addUser", userForAdd)
       }

       putUser(userForEdit: User){
        return this.httpServ.put("http://localhost:3000/user/editUser", userForEdit)
       }
       
      deleteUser(userId: Number){
        return this.httpServ.delete("http://localhost:3000/user/deleteUser/" + userId)
       }

    } 

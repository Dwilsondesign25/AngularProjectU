import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class UserService {
    userList = [
        "Drew Wilson",
        "Elmira Keddy",
        "Eveline Grandisson",
        "Berry Wildes",
        "Quintus Hastings",
        "Harp Antonignetti",
        "Vite Playfair",
        "Noelle Dowears",
        "Dunoggota Lubbock",
        "Auberta Skerrett",
        "Constantin Cosgry",
        "Loleta Grenfell",
        "Nadeen Matchett",
        "Elli Galliver",
        "Gayla Hawtin",
        "Liam Antwis",
        "Merilyn Baumford",
        "Lilas Colquyte",
        "Roi Kinworthy",
        "Patin Flecknoe",
        "Etienne Vedeneev",
        "Diane Evesque",
        "Ashlee Amoore",
        "Julissa Bandey",
        "Merridie McPartling",
        "Nanete Kitlee"        
      ];

      removeUser(index: number){
        this.userList.splice(index, 1);
      
      } 
}
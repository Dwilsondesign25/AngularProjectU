import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/User.model";

@Injectable({ providedIn: "root" })
export class UserService {

    constructor(
        public httpServ: HttpClient
    ) {}
    postUser(userForAdd: User) {
        return this.httpServ.post("http://localhost:3000/user/addUser", userForAdd)
    }

}
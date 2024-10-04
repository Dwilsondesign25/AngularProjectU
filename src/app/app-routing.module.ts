import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { UsersComponent } from "./users/users.component";
import { UserSingleComponent } from "./users/user-single/user-single.component";
import { RegisterComponent } from "./auth/register/register.component";
import { authGaurd } from "./architecture/auth.gaurd.gaurd";
import { PostsComponent } from "./posts/posts.component";
// Removed the import statement for AppRoutingModule


 //Routes are evaluated from top to bottom
// When there is a match on more than 1 route, we will go to the one higher on the list
const routes: Routes = [
    {path: "", redirectTo: "user", pathMatch: "full"},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "", canActivate: [authGaurd], children: [
        // ... other children routes

        {path: "user", children: [
            {path: "", component: UsersComponent, pathMatch: "full"},
            {path: ":userId", component: UserSingleComponent},
        ]},
        {path: "posts", component: PostsComponent}
        {path: "**", redirectTo: "login"}
    ]},
    {path: "**", redirectTo: "login"},
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'top'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
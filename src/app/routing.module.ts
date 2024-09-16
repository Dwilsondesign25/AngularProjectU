import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { UsersComponent } from "./users/users.component";
// Removed the import statement for AppRoutingModule

const routes: Routes = [
    
    // Add routes for other components here...
    { path: '', redirectTo: "login", pathMatch: "full" },
    {path: "login", component: LoginComponent},
    {path: "users", component: UsersComponent},
    {path: "**", redirectTo: "login"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
import { NgModule } from "@angular/core";

const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "users", component: LoginComponent},
    {path: "**", component: LoginComponent}
];

@NgModule({
    imports: [],
    exports: [],
})
export class AppRoutingModule {}
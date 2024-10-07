import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { UserSingleComponent } from './users/user-single/user-single.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { AuthInterceptor } from './architecture/AuthInterceptor.interceptor';
import { PostsComponent } from './posts/posts.component';
import { PostSingleComponent } from './post-single/post-single.component';


// Import the HttpClientModule and provide the HttpClient interceptor



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserSingleComponent,
    LoginComponent,
    RegisterComponent,
    PostsComponent,
    PostSingleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([]) // Add the router module
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor, 
      multi: true
    },
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

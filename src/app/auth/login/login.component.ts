import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { AuthService } from '../../services/auth-service.service';
import { Login } from '../../models/Login.Model';
import { TokenResponse } from '../../models/TokenResponse.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: Login;

  constructor( 
    public router: Router,
    public authServ: AuthService,
  ){
    this.login = { ...this.authServ.emptyLogin };
  }

  goToRegistration(event: Event){
    event.preventDefault();
    this.router.navigate(['register']);
  }

  submitLogin(){
    this.authServ.postLogin(this.login).subscribe({
      next: (res: TokenResponse) => {
        // console.log(res);
        this.authServ.handleLogin(res.token).then(() => {
          this.router.navigate(["user"]);
        });
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
}

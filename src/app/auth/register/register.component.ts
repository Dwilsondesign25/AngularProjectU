import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';
import { Registration } from '../../models/Registration.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registration: Registration;

  constructor(
    public authServ: AuthService,
  ){
    this.registration = {...this.authServ.emptyRegistration};
  }

  submitRegistration() {
    console.log(this.registration);
    this.authServ.postRegistration(this.registration).subscribe({
      next:(res) =>{
          alert("Registration was successful!");
        },
        error: (err) =>{
            console.log(err);
            alert("There was an error processing your registration!");
        }
    })
  }
}
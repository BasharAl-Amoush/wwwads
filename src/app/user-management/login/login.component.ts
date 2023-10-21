import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/views/user-management/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  LoginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
     private router: Router,
      private http: HttpClient,
      
       private LoginService :LoginService) {
    this.LoginForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.LoginForm.valid) {
      this.LoginService.loginuser(this.LoginForm.value).subscribe(
        (responseData) => {
          console.log(responseData);
        
            this.router.navigate(['/usermanagement']);
        },
        (error) => {
          console.error(error);
        }
      );  
    }
  }

}

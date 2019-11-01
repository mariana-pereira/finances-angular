import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private authService: AuthService,
    private router: Router,

  ) { }

  ngOnInit() {
  }

  onSubmit() {
    const credentials = this.loginForm.value;
    this.authService.login(credentials)
    .subscribe(
      (user) => {
        this.router.navigateByUrl('/forgot_password');
      },
      (err) => {
        console.log(err);
      }
      
    )
  }

}

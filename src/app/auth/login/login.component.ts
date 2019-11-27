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

  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,

  ) { }

  ngOnInit() {

    if(this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/main');
    } 
  }

  onSubmit() {
    this.isLoading = true;
    const credentials = this.loginForm.value;
    this.authService.login(credentials)
    .subscribe(
      (data) => {
        this.isLoading = false;
        this.router.navigateByUrl('/main');
      },
      (err) => {
        console.log(err);
        this.isLoading = false;
      }
      
    )
  }

}

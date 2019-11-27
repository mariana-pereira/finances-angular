import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email = new FormControl('');

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    if(this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/main');
    } 
  }

  onSubmit() {
    let body = { 
      email: this.email.value
    }
    this.authService.forgotPassword(body)
      .subscribe(
        (user) => {
          this.router.navigateByUrl('/reset_password');
        },
        (err) => {
          console.log(err);
        }
      )
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  userForm = new FormGroup({
    email: new FormControl(''),
    token: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    const credentials = this.userForm.value;

    this.authService.resetPassword(credentials)
    .subscribe(
      (user) => {
        this.router.navigateByUrl('/');
      },
      (err) => {
        console.log(err);
      }
    )
  }
}

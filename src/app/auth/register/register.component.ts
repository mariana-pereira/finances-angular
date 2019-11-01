import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {

    const user = this.userForm.value;

    this.authService.register(user)
    .subscribe(
      (user) => {
        console.log(user);
      },
      (err) => {
        console.log(err);
      }
    )
  }

}

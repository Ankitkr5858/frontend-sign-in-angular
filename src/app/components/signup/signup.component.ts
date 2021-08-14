import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }
  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  signUp() {
    if(!this.user.email || !this.user.password) return;
    this.authService.signUpUser(this.user)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home']);
        },
        err => console.log(err)
      )
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'https://5de6686fae1d.ngrok.io/api';
  constructor(private http: HttpClient, private router: Router) { }

  signUpUser(user: any) {
    return this.http.post<any>(this.URL + '/signup', user);
  }

  signInUser(user: any) {
    return this.http.post<any>(this.URL + '/signin', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

}

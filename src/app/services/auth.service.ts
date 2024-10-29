import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); 
  }


  login(token: string) {
    localStorage.setItem('token', token);
  }


  logout() {
    localStorage.removeItem('token');
  }
}

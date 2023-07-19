import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  isAuthorized(){
    return false;
  }
  getUserName(){
    return "Andrii";
  }
}

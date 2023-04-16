import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

  export class AuthService {
    
  constructor() { }

  isLoggedIn() {
    console.log(localStorage.getItem("token"));
    console.log(!!localStorage.getItem("token"));
    return !!localStorage.getItem("token");


    // if (localStorage.getItem("token") != null) {
    //   return true;
    // }
    // return false;
  }
}  

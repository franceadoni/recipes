import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register(f: NgForm) {
    console.log(f.value);
    const body = {
      username: f.value.username,
      email: f.value.email,
      password: f.value.password,           
      role: [f.value.role]
    };
    const url = 'http://localhost:8081/api/auth/signup';
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')

    this.httpClient.post<any>(url, body, { 'headers': headers })
      .subscribe ( data => {
        console.log(data);
        localStorage.setItem('token', data.accessToken);
        this.router.navigate(['/recipes']);
      });
  }

}

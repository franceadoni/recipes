import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(f: NgForm) {
    const body = {
        username: f.value.username,
        password: f.value.password
    };
    const url = 'http://localhost:8081/api/auth/signin';
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

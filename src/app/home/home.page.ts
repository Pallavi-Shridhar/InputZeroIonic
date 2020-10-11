import { Component } from '@angular/core';
import { ApiService } from '../services/api.service'; 
import { Router } from '@angular/router';
//import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  form ={
    email: "",
    password: ""
  }

  constructor(private apiService: ApiService, private router: Router) {}

  login(){
    this.apiService.login(this.form).subscribe(
    result => {
    localStorage.setItem('token', result['token']);
    localStorage.setItem('email', this.form.email);
    this.router.navigate(['/home/users']);
   },
   error => {
    console.log("Invalid credentials");
   }
   );
  }

}

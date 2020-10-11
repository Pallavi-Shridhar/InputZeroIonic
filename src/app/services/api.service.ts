import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "https://reqres.in/api/";

  //httpOptions = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem("AccessToken")});
  

  constructor(private http: HttpClient) { }

  login(data){
  return this.http.post(this.url+"login", data);
  }

  users(){
    return this.http.get(this.url+"users");
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  users: Array<any>;

  constructor(private apiService: ApiService) { }

  ngOnInit()
  {
    this.apiService.users().subscribe(
      result => {
        this.users = result['data'];     
        console.log(this.users); 
     }
     );

  }

}

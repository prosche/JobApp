import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserSearchService } from './user-search.service'

@Component({
  moduleId: module.id,
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  providers: [ UserSearchService ],
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  errorMessage: string;
  users: User[] = [];

  username = "user-search works!";

  constructor(private userSearchService: UserSearchService) { }

  ngOnInit() {
  }

  ngAfterContentInit (){
    this.getUsers();
  }

  getUsers() {
    this.userSearchService
        .getUsers()
        .then(
        	users => this.users = users.slice(1, 5),
        	error => this.errorMessage = <any>error
        	);
  }
}

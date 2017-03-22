import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  username = "user-search works!";

  constructor() { }

  ngOnInit() {
  }

}

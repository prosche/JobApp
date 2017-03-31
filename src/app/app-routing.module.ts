import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserSearchComponent } from './user/user-search/user-search.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { UserAddComponent } from './user/user-add/user-add.component';


const routes: Routes = [
  { path: '', redirectTo: '/userSearch', pathMatch: 'full' },
  { path: 'userSearch',  component: UserSearchComponent },
  { path: 'userList',  component: UserListComponent },
  { path: 'attendance',  component: AttendanceComponent },
  { path: 'userAdd',  component: UserAddComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

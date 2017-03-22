import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserSearchComponent } from './user/user-search/user-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/userSearch', pathMatch: 'full' },
  { path: 'userSearch',  component: UserSearchComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

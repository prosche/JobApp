import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryUserDataService } from './user/in-memory-user-data.service';
// import { DefaultRequestOptions }   from './user/default-request-options.service';

import { AppComponent } from './app.component';
import { UserSearchComponent } from './user/user-search/user-search.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { UserSearchService } from './user/user-search/user-search.service';
import { UserAddComponent } from './user/user-add/user-add.component';


@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    UserListComponent,
    AttendanceComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    // InMemoryWebApiModule.forRoot(InMemoryUserDataService),
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

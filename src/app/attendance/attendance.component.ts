import { Component, OnInit } from '@angular/core';

import { Attendance } from './attendance';
import { AttendanceService } from './attendance.service';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  providers: [ AttendanceService ],
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  errorMessage: String;
  attendances: Attendance[] = [];

  constructor(private attendanceService: AttendanceService) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
  	this.getMonthlyAttendance(201703);
  }

  getMonthlyAttendancePromise(month: number) {
  	this.attendanceService
  	    .getMonthlyAttendancePromise(month)
  	    .then(
  	      attendances => this.attendances = attendances,
  	      error => this.errorMessage = <any>error
  	    );
  }

  getMonthlyAttendance (month: number) {
  	this.attendanceService
  	    .getMonthlyAttendance(month)
  	    .subscribe(
  	      attendances => this.attendances = attendances ,
  	      error => this.errorMessage = <any>error
  	    );
  }

  items: Observable<string[]>;
  getWikiMonthlyAttendance (month: number) {
    this.items = this.attendanceService.getWikiMonthlyAttendance(month);
    console.log(this.items);
  }

}

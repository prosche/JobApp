import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from '../user';

@Injectable()
export class UserSearchService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'app/users';  // URL to web api

  constructor(private http: Http) { }

  getUsers(): Promise<User[]> {
  	return this.http.get(this.url)
  	           .toPromise()
  	           .then(this.extractData)
  	           .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}

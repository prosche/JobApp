import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions, RequestMethod, URLSearchParams, Request, Jsonp } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Attendance } from './attendance';

@Injectable()
export class AttendanceService {
  private url = 'http://localhost:8080/job/holidays/';

  constructor(private jsonp: Jsonp, private http: Http) { }

  getMonthlyAttendancePromise(month: number): Promise<Attendance[]> {
  	console.log(this.url);
  	var a = month;
  	console.log(a);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.set('Access-Control-Allow-Origin', '*');
    var options = new RequestOptions({ headers: headers,
                                       method: RequestMethod.Post,
                                       url: this.url,
                                       body: JSON.stringify(null) });
    let data = new URLSearchParams();
    data.append('month', "201703");
  	// return this.http.request(new Request(options))
  	return this.http.get(this.url)
  	           .toPromise()
  	           .then(this.extractData)
  	           .catch(this.handleError);
  }

  getMonthlyAttendance(month: number): Observable<Attendance[]>{
        // const headers = new Headers();
        // headers.append('Access-Control-Allow-Headers', 'Content-Type');
        // headers.append('Access-Control-Allow-Methods', 'GET');
        // headers.append('Access-Control-Allow-Origin', '*');
        // headers.append('Access-Control-Allow-Credentials', 'true');
    // let headers = new Headers({'Access-Control-Allow-Origin': '*'});
    //  headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    //  headers.append('Access-Control-Allow-Headers', 'content-type,accept');
    //  headers.append('Access-Control-Max-Age', '1728000');
    //  let options = new RequestOptions({ headers: headers });
    //  options.headers.append("Access-Control -Allow-Origin", "*");
    //  options.headers.append("Access-Control-Allow-Origin", "*");
    //  options.headers.append("Access-Control-Allow-Methods", "POST, GET, DELETE");
    //  options.headers.append("Access-Control-Max-Age", "3600");
    //  options.headers.append("Access-Control-Allow-Headers", "Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Client-Offset");
    // console.log(headers);
  	let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });        
 
  	return this.http.get(this.url + month)
  	           .map(this.extractData)
  	           .catch(this.handleError);
  }

  getWikiMonthlyAttendance (month: number) {

    let wikiUrl = 'http://localhost:8080/job/holidays/' + month;
    console.log(wikiUrl);

    let params = new URLSearchParams();
    // params.set('search', String(month)); // the user's search value
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    // TODO: Add error handling
    return this.jsonp
               .get(wikiUrl)
               .map(response => <string[]> response.json()[1])
               .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
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

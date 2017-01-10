import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class RestService {

    // private actionUrl:string;    
    // private headers:Headers;
    
    // constructor(private http:Http){

    //     this.actionUrl = '/api/courses';
    
    //     this.headers = new Headers();
    //     this.headers.append('Content-Type','application/json');
    //     this.headers.append('Accept','application/json');

    // }

    // getCourses = ():Observable<Course[]> => {
    //     return this.http.get(this.actionUrl).map(res=> <Course[]>res.json())
    //     .catch(this.handleError);
    // }

}
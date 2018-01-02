import { Injectable } from '@angular/core';
import { Http,Response,Jsonp } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from "rxjs/Rx";


import 'rxjs/add/operator/map';

@Injectable()
export class DockerImageDetailFetchServiceService {
    
  constructor(private _http: Http) { }
  private observable: Observable<any>;
  
  getTestData(): Observable<any[]>{
        return this._http.get("http://localhost:3000/api/getImagesInfo", { headers: this.getHeaders() })
            .map((res: Response) => res.json())
            .retry(2)
            .catch(this.handleError);
}
private getHeaders() {
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
 
    
}

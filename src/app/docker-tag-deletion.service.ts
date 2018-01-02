import { Injectable } from '@angular/core';
import { Http,Response,Jsonp } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from "rxjs/Rx";
@Injectable()
export class DockerTagDeletionService {

  constructor(private _http: Http) { }
  private observable: Observable<any>;

  public removeTag(tagName: any): Observable<any[]>{
        return this._http.delete("http://localhost:3000/api/deleteTag/"+tagName, { headers: this.getHeaders() })
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

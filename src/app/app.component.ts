import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myData: Array<any>;
  mobileQuery: MediaQueryList;

  fillerNav = ["Local", "peproxy.rds.lexmark.com:5002", "peproxy.rds.lexmark.com:5003"]
  private _mobileQueryListener: () => void;

  constructor(private http: Http, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}

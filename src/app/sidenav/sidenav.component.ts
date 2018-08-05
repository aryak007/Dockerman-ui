import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  fillerNav = ["Local", "peproxy.rds.lexmark.com:5002", "peproxy.rds.lexmark.com:5003"]
  constructor() {
  }



}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  constructor(public router:Router){}
  
  logout(): void {
    this.router.navigate(["login"],{skipLocationChange:true})
  }
}
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RouterServiceService {

  constructor(private router: Router, private location: Location) { }

  routeToDashboard() {
    this.router.navigate(['dashboard']);
  }
}

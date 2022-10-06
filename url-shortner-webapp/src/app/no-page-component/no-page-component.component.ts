import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-page-component',
  templateUrl: './no-page-component.component.html',
  styleUrls: ['./no-page-component.component.scss']
})
export class NoPageComponentComponent {

  constructor(private router: Router) { }

  goToPage(page: string){
    this.router.navigate([`${page}`]);
  }

}

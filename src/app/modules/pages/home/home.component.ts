import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }



  goUp(){
    document.getElementsByClassName('header')[0].scrollIntoView({ behavior: 'smooth' });
    const btn = document.querySelector("#gotop");

  }

  ngOnInit() {
  }

}

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('img') imgElement: ElementRef | any;

  constructor() { }

  goUp(){
    document.getElementsByClassName('header')[0].scrollIntoView({ behavior: 'smooth' });
    const btn = document.querySelector("#gotop");

  }
  ngAfterViewInit(): void {
    (<any>$(this.imgElement.nativeElement)).magnificPopup({ type: 'iframe' });
  }
  ngOnInit() {
  }

}

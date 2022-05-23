import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showHeader = false;
  respHeader = false;
  getScreenWidth = 0;

  @HostListener('window:resize', ['$event'])
  onWindowResize(): void {
    this.getScreenWidth = window.innerWidth;
    if (this.getScreenWidth < 1024) { this.showHeader = true; }
    else { this.showHeader = false;}
  }

  constructor() { }

  ngOnInit(): void {
    this.onWindowResize();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-side',
  templateUrl: './nav-bar-side.component.html',
  styleUrls: ['./nav-bar-side.component.css']
})
export class NavBarSideComponent implements OnInit {

  _opened = false;

  constructor() { }

  ngOnInit() {
  }

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

}

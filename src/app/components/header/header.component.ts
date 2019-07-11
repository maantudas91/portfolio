import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host:{
    id : 'header'
  }
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

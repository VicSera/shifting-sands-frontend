import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  maxCodeLength = 13;
  code = '';

  constructor() { }

  ngOnInit(): void {
  }

  getReadLink(): string {
    console.log('read/' + this.code);
    return 'read/' + this.code;
  }
}

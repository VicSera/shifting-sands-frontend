import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  goodText: string;
  badText: string;

  constructor() { }

  ngOnInit(): void {
    this.goodText = 'You are awesome!';
    this.badText = 'You are not so awesome!';
  }

}

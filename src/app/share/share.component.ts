import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {
  writeId: string;
  writeLink: string;
  readId: string;

  constructor() { }

  ngOnInit(): void {
    this.writeId = '123456';
    this.writeLink = 'www.shiftingsands.io/form/' + this.writeId;
    this.readId = '654321';
  }

}

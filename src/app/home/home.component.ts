import { Component, OnInit } from '@angular/core';
import { AnimatedRoutingService } from '../service/animated-routing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  maxCodeLength = 13;
  code = '';

  constructor(
    private animatedRoutingService: AnimatedRoutingService
  ) { }

  ngOnInit(): void {
  }

  getReadLink(): string {
    return 'read/' + this.code;
  }

  animateToShareScreen(): void {
    this.animatedRoutingService.routeWithDelay(['share'], 40000);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Coordinate } from '../util/coordinate';
import { getTriangleMesh, Triangle } from '../util/triangle';
import { delay } from '../util/delay';

@Component({
  selector: 'app-loading-animation',
  templateUrl: './loading-animation.component.html',
  styleUrls: ['./loading-animation.component.css']
})
export class LoadingAnimationComponent implements OnInit {
  animating = false;
  triangles: Triangle[];

  @ViewChild('background') background;

  constructor() { }

  ngOnInit(): void {
    this.triangles = getTriangleMesh(
      1920, 20000, 1080,
      200, 65,
      '#ea904b', '#e5b163', 10);
  }

  start(): void {
    console.log('Starting animation');
    this.animating = true;
    (async () => {
      while (this.animating) {
        this.shiftRight(30);
        await delay(10);
      }
    })();
  }

  finish(): void {
    console.log('Finishing animation');
    this.animating = false;
  }

  getPointsFromTriangle(triangle: Triangle): string {
    const p1 = triangle.point1;
    const p2 = triangle.point2;
    const p3 = triangle.point3;
    return `${p1.x}, ${p1.y} ${p2.x}, ${p2.y} ${p3.x}, ${p3.y}`;
  }

  shiftRight(speed: number): void
  {
    for (const t of this.triangles) {
      t.point1.x += speed;
      t.point2.x += speed;
      t.point3.x += speed;
    }
  }
}

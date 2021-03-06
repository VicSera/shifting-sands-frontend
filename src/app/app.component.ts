import { Component, OnInit, ViewChild } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { FinishLoading, StartLoading } from './store/action/app-actions';
import { LoadingAnimationComponent } from './loading-animation/loading-animation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shifting-sands-frontend';

  @ViewChild('loadingAnimation') loadingAnimationComponent: LoadingAnimationComponent;

  constructor(
    private actions$: Actions
  ) {
  }

  ngOnInit(): void {
    this.actions$.pipe(
      ofType(StartLoading)
    ).subscribe(() => this.loadingAnimationComponent.start());

    this.actions$.pipe(
      ofType(FinishLoading)
    ).subscribe(() => this.loadingAnimationComponent.finish());
  }
}

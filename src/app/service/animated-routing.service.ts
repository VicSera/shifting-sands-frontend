import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { FinishLoading, StartLoading } from '../store/action/app-actions';
import { delay } from '../util/delay';

@Injectable({
  providedIn: 'root'
})
export class AnimatedRoutingService {

  constructor(
    private router: Router,
    private store: Store
  ) { }

  routeWithDelay(path: string[], ms: number): void {
    (async () => {
      this.store.dispatch(StartLoading());
      await delay(ms / 2);
      this.router.navigate(path);
      await delay(ms / 2);
      this.store.dispatch(FinishLoading());
    }) ();
  }
}

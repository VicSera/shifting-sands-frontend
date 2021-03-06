import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { FormService } from '../../service/form.service';
import {
  FinishLoading,
  FormReceived,
  RequestResponse,
  ResponseReceived,
  ResponseSubmitted,
  StartLoading,
  SubmitForm,
  SubmitResponse
} from '../action/app-actions';
import { map, switchMap, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { FormDTO } from '../../dto/form-dto';
import { ResponseDTO } from '../../dto/response-dto';

@Injectable()
export class AppEffect {
  constructor(
    private actions$: Actions,
    private store: Store,
    private formService: FormService
  ) {
  }

  submitForm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubmitForm),
      switchMap((action) => this.formService.getNewForm(action.formDto)),
      map((formDto: FormDTO) => FormReceived({ formDto }))
    ));

  submitResponse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubmitResponse),
      switchMap((action) => this.formService.submitResponse(action.responseDto)),
      map(() => ResponseSubmitted())
    ));

  requestResponse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RequestResponse),
      switchMap((action) => this.formService.requestResponse(action.readId)),
      map((responseDto: ResponseDTO) => ResponseReceived({ responseDto }))
    )
  );
  //
  // finishedLoading$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(FormReceived, ResponseReceived, ResponseSubmitted),
  //     tap(() => this.store.dispatch(FinishLoading()))
  //   ),
  //   { dispatch: false }
  // );
}


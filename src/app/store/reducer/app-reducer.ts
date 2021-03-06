import { createReducer, on } from '@ngrx/store';
import { AppState } from '../state/app-state';
import { FormReceived, RequestResponse, ResponseReceived, ResponseSubmitted, SubmitForm, SubmitResponse } from '../action/app-actions';

const initialState: AppState = {
  isLoading: false,
  formDto: null,
  responseDto: null
};

export const appReducer = createReducer(
  initialState,

  on(SubmitForm, (state) => ({ ...state, isLoading: true })),

  on(FormReceived, (state, { formDto }) => ({ ...state, isLoading: false, formDto })),

  on(SubmitResponse, (state) => ({ ...state, isLoading: true })),

  on(ResponseSubmitted, (state) => ({ ...state, isLoading: false })),

  on(RequestResponse, (state) => ({ ...state, isLoading: true })),

  on(ResponseReceived, (state) => ({ ...state, isLoading: false })),
);

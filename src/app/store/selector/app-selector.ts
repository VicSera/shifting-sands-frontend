import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app-state';
import { FormDTO } from '../../dto/form-dto';

export const formState = (state: AppState) => state.formDto;

export const formSelector = createSelector(
  (state: AppState) => state.formDto,
  (formDto: FormDTO) => formDto
);

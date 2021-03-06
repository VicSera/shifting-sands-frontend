import { createAction, props } from '@ngrx/store';
import { FormDTO } from '../../dto/form-dto';
import { ResponseDTO } from '../../dto/response-dto';

export const SubmitForm = createAction('[FORM] submitForm', props<{ formDto: FormDTO }>());

export const FormReceived = createAction('[FORM] formReceived', props<{ formDto: FormDTO }>());


export const SubmitResponse = createAction('[FORM] submitResponse', props<{ responseDto: ResponseDTO }>());

export const ResponseSubmitted = createAction('[FORM] responseSubmitted');


export const RequestResponse = createAction('[FORM] requestResponse', props<{ readId: string }>());

export const ResponseReceived = createAction('[FORM] responseReceived', props<{ responseDto: ResponseDTO }>());


export const StartLoading = createAction('[LOAD] startLoading');

export const FinishLoading = createAction('[LOAD] finishLoading');

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormDTO} from '../dto/form-dto';
import {environment} from '../../environments/environment';
import { ResponseDTO } from '../dto/response-dto';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private http: HttpClient
  ) { }

  getNewForm(formDto: FormDTO): Observable<FormDTO> {
    return this.http.post(`${environment.apiUrl}/new-form`, formDto) as Observable<FormDTO>;
  }

  submitResponse(responseDto: ResponseDTO): Observable<object> {
    return this.http.post(`${environment.apiUrl}/submit`, responseDto) as Observable<object>;
  }

  requestResponse(readId: string): Observable<ResponseDTO> {
    return this.http.get(`${environment.apiUrl}/read/${readId}`) as Observable<ResponseDTO>;
  }
}

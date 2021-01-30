import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormDTO} from '../dto/form-dto';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private http: HttpClient
  ) { }

  getNewForm(): Observable<FormDTO> {
    return this.http.post(environment.apiUrl + '/new-form', null) as Observable<FormDTO>;
  }
}

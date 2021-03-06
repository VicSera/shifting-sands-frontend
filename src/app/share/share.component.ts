import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormReceived, SubmitForm } from '../store/action/app-actions';
import { environment } from '../../environments/environment';
import { Actions, ofType } from '@ngrx/effects';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<boolean>();

  writeLink: string;
  readId: string;

  constructor(
    private store: Store,
    private actions$: Actions
  ) {
  }


  ngOnInit(): void {
    this.store.dispatch(
      SubmitForm({
        formDto: {
          readId: null,
          writeId: null,
          formText: ''
        }
      })
    );

    this.actions$.pipe(
      ofType(FormReceived),
      takeUntil(this.destroyed$)
    ).subscribe(({ formDto }) => {
      this.readId = formDto.readId;
      this.writeLink = `${environment.hostUrl}/form/${formDto.writeId}`;
    });
  }

  copyToClipboard(message: string): void {
    const textarea = document.createElement('textarea');
    textarea.style.position = 'fixed';
    textarea.style.left = '0';
    textarea.style.top = '0';
    textarea.style.opacity = '0';
    textarea.value = message;
    document.body.append(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}

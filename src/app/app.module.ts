import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShareComponent } from './share/share.component';
import { FormComponent } from './form/form.component';
import { ReadComponent } from './read/read.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpBasicAuthInterceptor } from './service/http-basic-auth.interceptor';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/reducer/app-reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffect } from './store/effect/app-effect';
import { LoadingAnimationComponent } from './loading-animation/loading-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShareComponent,
    FormComponent,
    ReadComponent,
    LoadingAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ appReducer }),
    EffectsModule.forRoot([AppEffect])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpBasicAuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

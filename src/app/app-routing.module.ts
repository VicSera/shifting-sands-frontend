import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ShareComponent} from './share/share.component';
import {FormComponent} from './form/form.component';
import {ReadComponent} from './read/read.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'share',
    component: ShareComponent
  },
  {
    path: 'form/:id',
    component: FormComponent
  },
  {
    path: 'read/:id',
    component: ReadComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }




import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutComponent} from './about.component';
import {Routes, RouterModule} from '@angular/router'; 
import {ShareModule} from '../../frontend/shared/share.module';

const routes: Routes = [
  
  {path: '', component: AboutComponent}
  
  ];


@NgModule({
  imports: [
    ShareModule,
    CommonModule,
    
    RouterModule.forChild(routes)

  ],
  declarations: [AboutComponent]
})
export class AboutModule { }

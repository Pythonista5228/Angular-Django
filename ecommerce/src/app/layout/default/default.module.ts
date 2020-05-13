import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightJsModule } from 'ngx-highlight-js';

import { SharedModule } from '../../shared/shared.module';
import { DefaultComponent } from './default.component';
import { UserComponent } from 'src/app/modules/user/user.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { DocumentsComponent } from 'src/app/modules/documents/documents.component';

@NgModule({
  declarations: [
    DefaultComponent,
    UserComponent,
    DashboardComponent,
    DocumentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HighlightJsModule,    
  ],
  exports: [
    DefaultComponent,
    UserComponent,
    DashboardComponent
  ],
  providers:[]
})
export class DefaultModule { }

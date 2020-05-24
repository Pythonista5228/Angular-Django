import { ProductApiService } from '../../services/product-api.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightJsModule } from 'ngx-highlight-js';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { SharedModule } from '../../shared/shared.module';
import { DefaultComponent } from './default.component';
import { UserComponent } from 'src/app/modules/user/user.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { DocumentsComponent } from 'src/app/modules/documents/documents.component';
import { ProductListComponent } from '../../modules/product-list/product-list.component'

@NgModule({
  declarations: [
    DefaultComponent,
    UserComponent,
    DashboardComponent,
    DocumentsComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HighlightJsModule,   
    ScrollingModule 
  ],
  exports: [
    DefaultComponent,
    UserComponent,
    DashboardComponent
  ],
  providers:[ProductApiService]
})
export class DefaultModule { }

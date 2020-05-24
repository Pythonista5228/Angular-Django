import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { UserComponent } from './modules/user/user.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DocumentsComponent } from './modules/documents/documents.component';
import { ProductListComponent } from './modules/product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        pathMatch:"full",
      },
      {
        path: 'products',
        component: ProductListComponent,
        pathMatch:"full",
      },
      {
        path: 'categories/:product_name',
        component: DocumentsComponent,
        pathMatch:"full",
      },
    ],
  },
  // {
  //   path:'dashboard', component: DashboardComponent
  // }
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

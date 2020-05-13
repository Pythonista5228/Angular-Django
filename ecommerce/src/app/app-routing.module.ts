import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { UserComponent } from './modules/user/user.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DocumentsComponent } from './modules/documents/documents.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        pathMatch:"full",
      },
      {
        path: 'userlogin',
        component: UserComponent,
        pathMatch:"full",
      },
      {
        path: 'cloud-documents',
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

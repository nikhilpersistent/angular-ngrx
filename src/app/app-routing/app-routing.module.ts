import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from '../home/home.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: HomeComponent,
    children: [
      {
          path: '',
          redirectTo: '/login',
          pathMatch: 'full',
      }]
  },
  {
    path: 'customer',
    loadChildren: "src/app/customer/customer.module#CustomerModule"
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

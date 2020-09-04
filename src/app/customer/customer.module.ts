import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerComponent } from './customer/customer.component';
import {RouterModule,Routes} from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
const customerRoutes:Routes=[
  {
    path:"",
    component:CustomerComponent
  }
]

@NgModule({
  declarations: [CustomerListComponent, CustomerAddComponent, CustomerEditComponent, CustomerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(customerRoutes)
  ],
})
export class CustomerModule { }

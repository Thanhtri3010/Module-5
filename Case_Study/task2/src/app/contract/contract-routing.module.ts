import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from "../customer/customer-list/customer-list.component";
import {CustomerCreateComponent} from "../customer/customer-create/customer-create.component";
import {CustomerEditComponent} from "../customer/customer-edit/customer-edit.component";
import {ContractListComponent} from "./contract-list/contract-list.component";
import {ContractCreateComponent} from "./contract-create/contract-create.component";


const routes: Routes = [
  {
    path: '',
    component: ContractListComponent
  }, {
    path: 'create',
    component: ContractCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from "../customer/customer-list/customer-list.component";
import {CustomerCreateComponent} from "../customer/customer-create/customer-create.component";
import {CustomerEditComponent} from "../customer/customer-edit/customer-edit.component";
import {FacilityListComponent} from "./facility-list/facility-list.component";
import {FacilityCreateComponent} from "./facility-create/facility-create.component";
import {FacilityEditComponent} from "./facility-edit/facility-edit.component";


const routes: Routes = [
  {
    path: '',
    component: FacilityListComponent
  }, {
    path: 'create',
    component: FacilityCreateComponent
  }, {
    path: 'edit/:id',
    component: FacilityEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }

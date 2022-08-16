import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BodyComponent} from "./body/body.component";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {FacilityListComponent} from "./facility/facility-list/facility-list.component";
import {ContractListComponent} from "./contract/contract-list/contract-list.component";
import {CustomerEditComponent} from "./customer/customer-edit/customer-edit.component";
import {CustomerCreateComponent} from "./customer/customer-create/customer-create.component";
import {FacilityEditComponent} from "./facility/facility-edit/facility-edit.component";
import {FacilityCreateComponent} from "./facility/facility-create/facility-create.component";
import {ContractCreateComponent} from "./contract/contract-create/contract-create.component";


const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'customer', component: CustomerListComponent},
  {path: 'facility', component: FacilityListComponent},
  {path: 'contract', component: ContractListComponent},
  {path: 'customer/edit', component: CustomerEditComponent},
  {path: 'customer/create', component: CustomerCreateComponent},
  {path: 'facility/edit', component: FacilityEditComponent},
  {path: 'facility/create', component: FacilityCreateComponent},
  {path: 'contract/create', component: ContractCreateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

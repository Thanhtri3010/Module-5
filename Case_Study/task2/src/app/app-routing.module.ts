import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// @ts-ignore
import {ContractCreateComponent} from "./contract/contract-create/contract-create.component";
import {BodyComponent} from "./body/body.component";


const routes: Routes = [
  {
    path: '',
    component: BodyComponent
  },
  {
    path: 'customer',
    loadChildren:() => import('./customer/customer.module').then(module => module.CustomerModule)
  }, {
    path: 'facility',
    loadChildren:() => import('./facility/facility.module').then(module => module.FacilityModule)
  },{
    path: 'contract',
    loadChildren:() => import('./contract/contract.module').then(module => module.ContractModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

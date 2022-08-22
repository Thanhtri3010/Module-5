import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './product/product-list/product-list.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';


const routes: Routes = [{
  path: '',
  component: ProductComponent
},
  {
    path: 'product/edit/:id',
    component: ProductEditComponent
  },
  {
    path: 'product/delete:id',
    component: ProductComponent
  },
  {
    path: 'product/create',
    component: ProductCreateComponent
  }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

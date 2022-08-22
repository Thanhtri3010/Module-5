import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ProductComponent} from './product/product-list/product-list.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductCreateComponent,
    ProductEditComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

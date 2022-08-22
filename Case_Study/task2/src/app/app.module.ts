import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FacilityModule} from "./facility/facility.module";
import {CustomerModule} from "./customer/customer.module";
import {ContractModule} from "./contract/contract.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FacilityModule,
    CustomerModule,
    ContractModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

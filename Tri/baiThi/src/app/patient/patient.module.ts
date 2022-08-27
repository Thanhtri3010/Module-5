import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PatientRoutingModule} from './patient-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {PatientEditComponent} from './patient-edit/patient-edit.component';
import {PatientCreateComponent} from './patient-create/patient-create.component';
import {PatientListComponent} from './patient-list/patient-list.component';


@NgModule({
  declarations: [
    PatientListComponent,
    PatientEditComponent,
    PatientCreateComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class PatientModule {
}

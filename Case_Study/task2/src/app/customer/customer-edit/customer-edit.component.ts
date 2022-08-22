import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomerType} from "../../model/customer-type";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  id: number;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const customer = this.findById(this.id);
      this.customerForm = new FormGroup({
        id: new FormControl(customer.id),
        type: new FormControl(customer.type.id, [Validators.required]),
        name: new FormControl(customer.name, [Validators.required, Validators.pattern(/^([A-Z][^A-Z0-9\s]+)(\s[A-Z][^A-Z0-9\s]+)*$/)]),
        birthDay: new FormControl(customer.birthDay, [Validators.required]),
        gender: new FormControl(customer.gender, [Validators.required]),
        idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern("\\d{9}")]),
        phone: new FormControl(customer.phone, [Validators.required, Validators.pattern("^^090[0-9]{7}|091[0-9]{7}|\\(84\\)\\+90[0-9]{7}|\\(84\\)\\+91[0-9]{7}")]),
        email: new FormControl(customer.email, [Validators.required, Validators.email]),
        address: new FormControl(customer.address, [Validators.required]),
      });
    });
  }

  customerType: CustomerType[] = this.customerTypeService.getAll();

  ngOnInit(): void {
  }

  findById(id: number) {
    return this.customerService.findById(id);
  }

  update(id: number) {
    const customer = this.customerForm.value;
    customer.type = this.customerTypeService.findById(parseInt(this.customerForm.value.type));
    this.customerService.update(id, customer);
    alert('Update Successful');
    this.router.navigate(['/customer']);
  }

  validationMessage = {
    name: [
      {type: 'required', message: 'Enter Name'},
      {type: 'pattern', message: 'First Letter Must Be Capitalized'}
    ],
    birthDay: [
      {type: 'required', message: 'Enter Birth Day'},
    ],
    gender: [
      {type: 'required', message: 'Enter Gender'},
    ],
    idCard: [
      {type: 'required', message: 'Enter Id Card'},
      {type: 'pattern', message: 'Enter Includes 9 Numbers From 0-9'}
    ],
    phone: [
      {type: 'required', message: 'Enter Phone Number'},
      {type: 'pattern', message: 'Enter Phone Number 090xxxxxxxx or (+84)xxxxxxxx'}
    ],
    address: [
      {type: 'required', message: 'Enter Address'}
    ],
    email: [
      {type: 'required', message: 'Enter Email'},
      {type: 'email', message: 'Enter Email In Format @email.email'}
    ],
    type: [
      {type: 'required', message: 'Enter Customer Type'}
    ],
  }
}

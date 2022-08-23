import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../model/customer-type";
import {CustomerService} from "../../service/customer.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerType: CustomerType[] = [];
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    type: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.pattern(/^([A-Z][^A-Z0-9\s]+)(\s[A-Z][^A-Z0-9\s]+)*$/)]),
    birthDay: new FormControl('', [Validators.required, this.ageValidate]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern("\\d{9}")]),
    phone: new FormControl('', [Validators.required, Validators.pattern("^^090[0-9]{7}|091[0-9]{7}|\\(84\\)\\+90[0-9]{7}|\\(84\\)\\+91[0-9]{7}")]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required])
  });

  constructor(private customerService: CustomerService,
              private router: Router,
              private  toast: ToastrService) {
  }

  ngOnInit(): void {
    this.customerService.getAllCustomerType().subscribe(data => {
      this.customerType = data;
    }, error => {
      console.log(error);
    });
    console.log(this.customerType);
  }

  submit() {
    if (this.customerForm.valid) {
      const customer = this.customerForm.value;
      console.log(customer.type)
      this.customerService.getCustomerTypeById(customer.type).subscribe(customerType => {
        customer.type = {
          id: customerType.id,
          name: customerType.name
        }
        this.customerService.createCustomer(customer).subscribe(() => {
          this.toast.success("Cập nhật thành công","Thông báo")

        }, e => {
          console.log(e);
        }, () => {
          this.router.navigate(['/customer']);
        });
      })
    }
  }
  ageValidate(dob: AbstractControl) {
    const now = new Date();
    const birthDay = new Date(dob.value);
    const age = now.getFullYear() - birthDay.getFullYear();
    if (age < 18) {
      return {'ageError': true};
    }
    return null;
  }

  validationMessage = {
    name: [
      {type: 'required', message: 'Enter Name'},
      {type: 'pattern', message: 'First Letter Must Be Capitalized'}
    ],
    birthDay: [
      {type: 'required', message: 'Enter Birth Day'},
      {type: 'ageError', message: '<18 age'}
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

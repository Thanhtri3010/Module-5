import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../model/customer";
import {Facility} from "../../model/facility";
import {FacilityService} from "../../service/facility.service";
import {CustomerService} from "../../service/customer.service";
import {ContractService} from "../../service/contract.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractForm: FormGroup = new FormGroup({
    id: new FormControl(Math.floor(Math.random() * 1000)),
    facilityName: new FormControl('', [Validators.required]),
    customerName: new FormControl('', [Validators.required]),
    startDay: new FormControl('', [Validators.required]),
    endDay: new FormControl('', [Validators.required]),
    deposits: new FormControl('', [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
    totalPay: new FormControl('', [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
  });
  customers: Customer[] = [];

  facility: Facility[] = []

  constructor(private facilityService: FacilityService,
              private customerService: CustomerService,
              private contractService: ContractService,
              private router: Router,
              private  toast: ToastrService) {
  }

  ngOnInit(): void {
    this.getCustomer();
    this.getFacility();
  }

  getCustomer() {
    this.customerService.getAllCustomer().subscribe(customers => {
      this.customers = customers;
    });
  }

  getFacility() {
    this.facilityService.getAll().subscribe(facilities => {
      this.facility = facilities;
    });
  }

  submit() {
    const contract = this.contractForm.value;
    contract.customer = {
      name: contract.customer
    };
    contract.facility = {
      name: contract.facility
    };

    this.contractService.createContract(contract).subscribe(() => {
      this.contractForm.reset();
      this.toast.success('Added Contract Success..', 'Notification..');
      this.router.navigate(['/contract']);
    }, e => {
      console.log(e);
    });
  }

  validationMessage = {
    facilityName: [
      {type: 'required', message: 'Enter Facility'},
    ],
    customerName: [
      {type: 'required', message: 'Enter Customer'},
    ],
    startDay: [
      {type: 'required', message: 'Enter Star Day'},
    ],
    endDay: [
      {type: 'required', message: 'Enter End Day'},
    ],
    deposits: [
      {type: 'required', message: 'Enter Deposit'},
      {type: 'pattern', message: 'Deposit Greater Than 0'},
    ],totalPay: [
      {type: 'required', message: 'Enter Total Pay'},
      {type: 'pattern', message: 'Total Pay Greater Than 0'},
    ],
  }

}

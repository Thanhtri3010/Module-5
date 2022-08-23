import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer: Customer[] = [];
  id: number;
  name: string;
  searchForm: FormGroup;
  p = 0;


  constructor(private customerService: CustomerService,) {
    this.getCustomerList();
  }

  ngOnInit(): void {
    this.getCustomerList();
  }

  getCustomerList() {
    this.customerService.getAllCustomer().subscribe(data => {
      this.customer = data;
      this.getSearchForm();
    }, error => {
      console.log(error);
    });
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.id).subscribe(data => {
      this.ngOnInit();
    }, error => {
      console.log(error);
    });
  }

  sendId(id: number, name: string,) {
    this.id = id;
    this.name = name;
  }

  getSearchForm() {
    this.searchForm = new FormGroup({
      searchName: new FormControl(''),
      searchIdCard: new FormControl('')
    });
  }

  search() {
    const name = this.searchForm.value.searchName;
    const idCard = this.searchForm.value.searchIdCard;
    this.customerService.searchCustomerByNameAndIdCard(name, idCard).subscribe(data => {
        this.customer = data;
      }, error => {
        console.log(error);
      }
    );
  }

}

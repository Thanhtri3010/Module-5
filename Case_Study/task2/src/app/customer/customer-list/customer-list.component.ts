import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer: Customer[] = [];
  nameDelete: string;
  idDelete: number;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customer = this.customerService.getAll();
  }

  oppenDelete(customer: Customer) {
    this.idDelete = customer.id
    this.nameDelete = customer.name;
  }

  delete(idDelete) {
    this.customerService.delete(idDelete);
    this.ngOnInit();
  }
}

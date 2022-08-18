import {Injectable} from '@angular/core';
import {CustomerType} from "../model/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  customerType: CustomerType[] = [
    {id: 1, name: "Diamond"},
    {id: 2, name: "Platinum"},
    {id: 3, name: "Gold"},
    {id: 4, name: "Silver"},
    {id: 5, name: "Member"},
  ];

  constructor() {
  }

  getAll() {
    return this.customerType;
  }
}

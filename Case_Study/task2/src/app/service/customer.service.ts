import {Injectable} from '@angular/core';
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() {
  }

  customer: Customer[] = [
    {
      id: 1,
      type: {id: 1, name: "Diamond"},
      name: "Phạm Thành Tri",
      birthDay: "30/10/1997",
      gender: "Male",
      idCard: "123456789",
      phone: "0977708085",
      email: "phamthanhtri997@gmail.com",
      address: "Pleiku"
    },
    {
      id: 2,
      type: {id: 2, name: "Platinum"},
      name: "Thanh Tuyền",
      birthDay: "30/10/1997",
      gender: "Female",
      idCard: "123456789",
      phone: "0911112334",
      email: "thanhtuyen@gmail.com",
      address: "Pleiku"
    },
    {
      id: 3,
      type: {id: 3, name: "Gold"},
      name: "Tùng Lâm",
      birthDay: "30/10/1998",
      gender: "Male",
      idCard: "123456789",
      phone: "0911112335",
      email: "tunglam@gmail.com",
      address: "Pleiku"
    }
  ];

  getAll() {
    return this.customer;
  }

  save(customer: Customer) {
    this.customer.push(customer);
  }

  findById(id: number) {
    return this.customer.find(product => product.id === id);
  }

  update(id: number, customer: Customer) {
    for (let i = 0; i < this.customer.length; i++) {
      if (this.customer[i].id === id) {
        this.customer[i] = customer;
      }
    }
  }

  delete(id: number) {
    this.customer = this.customer.filter(customer => {
      return customer.id !== id;
    });
  }
}

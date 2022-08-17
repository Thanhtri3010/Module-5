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
      type: "Diamond",
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
      type: "Gold",
      name: "Thanh Tuyền",
      birthDay: "30/10/1997",
      gender: "Female",
      idCard: "123456789",
      phone: "0911112334",
      email: "thanhtuyen@gmail.com",
      address: "Pleiku"
    },
    {
      id: 2,
      type: "Menber",
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
}

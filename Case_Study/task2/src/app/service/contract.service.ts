import {Injectable} from '@angular/core';
import {Contract} from "../model/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor() {
  }

  contract: Contract[] = [
    {
      id: 1,
      facilityName: "Villa 1",
      customerName: "Phạm Thành Tri",
      starDay: "31/08/2021",
      endDay: "01/09/2021",
      deposits: 300,
      totalPay: 2000
    },
    {
      id: 2,
      facilityName: "Villa 2",
      customerName: "Thanh Tuyền",
      starDay: "20/08/2021",
      endDay: "25/08/2021",
      deposits: 300,
      totalPay: 2000
    },
    {
      id: 1,
      facilityName: "Villa 3",
      customerName: "Tùng Lâm",
      starDay: "01/08/2021",
      endDay: "05/08/2021",
      deposits: 300,
      totalPay: 2000
    }, {
      id: 1,
      facilityName: "Villa 4",
      customerName: "Thuỳ Linh",
      starDay: "12/09/2021",
      endDay: "22/09/2021",
      deposits: 300,
      totalPay: 2000
    }, {
      id: 1,
      facilityName: "Villa 5",
      customerName: "Trí Tuệ",
      starDay: "20/08/2021",
      endDay: "23/08/2021",
      deposits: 300,
      totalPay: 2000
    },


  ];

  getAll() {
    return this.contract;
  }
}

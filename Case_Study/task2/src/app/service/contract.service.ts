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
      facilityName: {id : 1, name: "ROOM SUITE SEA VIEW"},
      customerName: {id : 1, name: "Phạm Thành Tri"},
      startDay: "31/08/2021",
      endDay: "01/09/2021",
      deposits: 300,
      totalPay: 2000
    },
    {
      id: 2,
      facilityName: {id : 2, name: "ROOM STUDIO SUITE SEA VIEW"},
      customerName: {id : 2, name: "Thanh Tuyền"},
      startDay: "20/08/2021",
      endDay: "25/08/2021",
      deposits: 300,
      totalPay: 2000
    },
    {
      id: 3,
      facilityName: {id : 3, name: "SUPERIOR ROOM WITH GARDEN VIEW"},
      customerName: {id : 3, name: "Tùng Lâm"},
      startDay: "01/08/2021",
      endDay: "05/08/2021",
      deposits: 300,
      totalPay: 2000
    },
  ];

  getAll() {
    return this.contract;
  }
  save(contract: Contract) {
    this.contract.push(contract);
  }
}

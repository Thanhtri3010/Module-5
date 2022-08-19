import {Facility} from "./facility";
import {Customer} from "./customer";

export interface Contract {
  id?: number;
  facilityName?: Facility;
  customerName?: Customer;
  startDay?: string;
  endDay?: string
  deposits?: number;
  totalPay?: number;
}

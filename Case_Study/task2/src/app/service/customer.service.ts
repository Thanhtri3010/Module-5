import {Injectable} from '@angular/core';
import {Customer} from "../model/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "../model/customer-type";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private URL_CUSTOMERS = "http://localhost:3000/customer";
  private URL_CUSTOMER_TYPES = "http://localhost:3000/type";

  constructor(private httpClient: HttpClient) {
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.URL_CUSTOMERS);
  }

  getAllCustomerType(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this.URL_CUSTOMER_TYPES);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.URL_CUSTOMERS, customer);
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.URL_CUSTOMERS + '/' + id);
  }

  getCustomerTypeById(id: number): Observable<CustomerType> {
    return this.httpClient.get<CustomerType>(this.URL_CUSTOMER_TYPES + '/' + id);
  }

  editCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.URL_CUSTOMERS + '/' + id, customer);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(this.URL_CUSTOMERS + '/' + id);
  }

  searchCustomerByNameAndIdCard(name: string, idCard: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>
    (this.URL_CUSTOMERS + '?name_like=' + name + '&idCard_like=' + idCard);
  }
}

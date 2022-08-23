import {Injectable} from '@angular/core';
import {Contract} from "../model/contract";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private URL_CONTRACT = "http://localhost:3000/contract";

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.URL_CONTRACT);
  }

  createContract(contract: Contract): Observable<Contract> {
    return this.httpClient.post<Contract>(this.URL_CONTRACT , contract);
  }

  searchContract(keySearch: string): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.URL_CONTRACT +'?facilityType_like=' + keySearch);
  }
}

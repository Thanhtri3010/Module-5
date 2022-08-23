import {Injectable} from '@angular/core';
import {Facility} from "../model/facility";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private URL_FACILITY = "http://localhost:3000/facility";

  constructor(private httpClient: HttpClient) {
  }


  getAll(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(this.URL_FACILITY)
  }

  save(facility: Facility): Observable<Facility> {
    return this.httpClient.post<Facility>(this.URL_FACILITY, facility)
  }

  findById(id: number): Observable<Facility> {
    return this.httpClient.get<Facility>(this.URL_FACILITY + '/' + id)
  }

  update(id: number, facility: Facility): Observable<Facility> {
    return this.httpClient.put<Facility>(this.URL_FACILITY + '/' + id, facility)
  }

  delete(id: number): Observable<Facility> {
    return this.httpClient.delete<Facility>(this.URL_FACILITY + '/' + id);
  }
}

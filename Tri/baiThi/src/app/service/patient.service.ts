import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Patient} from '../model/patient';
import {Patienter} from '../model/patienter';


@Injectable({
  providedIn: 'root'
})
export class PatientService {


  private URL_PATIENT = 'http://localhost:3000/patient';
  private URL_PATIENTER = 'http://localhost:3000/patienter';

  constructor(private httpClient: HttpClient) {
  }

  getAllPatient(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(this.URL_PATIENT);
  }

  getAllPatienter(): Observable<Patienter[]> {
    return this.httpClient.get<Patienter[]>(this.URL_PATIENTER);
  }

  createPatient(patient: Patient): Observable<Patient> {
    return this.httpClient.post<Patient>(this.URL_PATIENT, patient);
  }

  getPatientById(id: number): Observable<Patient> {
    return this.httpClient.get<Patient>(this.URL_PATIENT + '/' + id);
  }

  getPatienterById(id: number): Observable<Patienter> {
    return this.httpClient.get<Patienter>(this.URL_PATIENTER + '/' + id);
  }

  editPatient(id: number, patient: Patient): Observable<Patient> {
    return this.httpClient.put<Patient>(this.URL_PATIENT + '/' + id, patient);
  }

  deletePatient(id: number): Observable<Patient> {
    return this.httpClient.delete<Patient>(this.URL_PATIENT + '/' + id);
  }

  searchPatientByName(name: string): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>
    (this.URL_PATIENT + '?name_like=' + name);
  }
}

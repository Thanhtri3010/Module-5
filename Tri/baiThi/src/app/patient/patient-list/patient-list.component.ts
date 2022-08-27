import {Component, OnInit} from '@angular/core';
import {Patient} from '../../model/patient';
import {FormControl, FormGroup} from '@angular/forms';
import {PatientService} from '../../service/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patient: Patient[] = [];
  id: number;
  name: string;
  searchForm: FormGroup;
  p = 0;


  constructor(private patientService: PatientService) {
    this.getPatientList();
  }

  ngOnInit(): void {
    this.getPatientList();
  }

  getPatientList() {
    this.patientService.getAllPatient().subscribe(data => {
      this.patient = data;
      this.getSearchForm();
    }, error => {
      console.log(error);
    });
  }

  deletePatient() {
    this.patientService.deletePatient(this.id).subscribe(data => {
      this.ngOnInit();
    }, error => {
      console.log(error);
    });
  }

  sendId(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  getSearchForm() {
    this.searchForm = new FormGroup({
      searchName: new FormControl(''),
      searchIdCard: new FormControl('')
    });
  }

  search() {
    const name = this.searchForm.value.searchName;
    const idCard = this.searchForm.value.searchIdCard;
    this.patientService.searchPatientByName(name).subscribe(data => {
        this.patient = data;
      }, error => {
        console.log(error);
      }
    );
  }

}

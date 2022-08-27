import {Component, OnInit} from '@angular/core';
import {Patienter} from '../../model/patienter';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {PatientService} from '../../service/patient.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {PatienterService} from '../../service/patienter.service';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {

  patienters: Patienter[] = [];
  patientForm: FormGroup;

  constructor(private patientService: PatientService,
              private router: Router,
              private toast: ToastrService,
              private patienterService: PatienterService) {

  }

  ngOnInit(): void {
    this.patientService.getAllPatienter().subscribe(data => {
      this.patienters = data;
      console.log(data);
      this.patientForm = new FormGroup({
        id: new FormControl(),
        patienter: new FormControl('', [Validators.required]),
        dayIn: new FormControl('', [Validators.required]),
        dayOut: new FormControl('', [Validators.required]),
        reason: new FormControl('', [Validators.required]),
        method: new FormControl('', [Validators.required]),
        doctor: new FormControl('', [Validators.required]),
      });
    }, error => {
      console.log(error);
    });

  }

  submit() {
    const patient = this.patientForm.value;
    this.patientService.getPatienterById(patient.patienter).subscribe(patienter => {
      patient.patienter = {id: patienter.id, name: patienter.name};
      this.patientService.createPatient(patient).subscribe(() => {
        this.patientForm.reset();
        this.toast.success('Added Patient Success..', 'Notification..');
        this.router.navigate(['/']);
      }, e => {
        console.log(e);
      });
    });
  }

  checkDayIn(control: AbstractControl) {
    const now = new Date();

    const dateIn = new Date(control.value);

    if (this.dateDiff(dateIn, now) <= 0) {
      return {dayInError: true};
    }
    return null;
  }

  checkDayOut(control: AbstractControl) {
    const now = new Date();

    const dateOut = new Date(control.value);

    if (this.dateDiff(dateOut, now) <= 0) {
      return {dayOutError: true};
    }
    return null;
  }

  checkDay(control: AbstractControl) {
    const dateIn = new Date(control.value.dayIn);

    const dateOut = new Date(control.value.dayOut);


    if (this.dateDiff(dateIn, dateOut) < 0) {
      return {dayError: true};
    }

    return null;
  }

  dateDiff(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  }

  validationMessage = {
    patienter: [
      {type: 'required', message: 'Enter Patienter'}
    ],
    dayIn: [
      {type: 'required', message: 'Enter Day In'},
      {type: 'dayInError', message: 'Ngày nhập viện phải nhỏ hơn ngày hiện tại'},
      {type: 'dayError', message: 'Ngày nhập viện không được lớn hơn ngày ra viện'}
    ],
    dayOut: [
      {type: 'required', message: 'Enter Day Outr'},
      {type: 'dayOutError', message: 'Ngày ra viện phải nhỏ hơn ngày hiện tại'},
      {type: 'dayError', message: 'Ngày nhập viện không được lớn hơn ngày ra viện'}
    ],
    reason: [
      {type: 'required', message: 'Enter Reason'}
    ],
    method: [
      {type: 'required', message: 'Enter Method'}
    ],
    doctor: [
      {type: 'required', message: 'Enter doctor'}
    ]
  };

}

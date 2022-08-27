import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Patienter} from '../../model/patienter';
import {PatientService} from '../../service/patient.service';
import {PatienterService} from '../../service/patienter.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  patientForm: FormGroup;
  id: number;
  patienters: Patienter[] = [];

  constructor(private patientService: PatientService,
              private patienterService: PatienterService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private toast: ToastrService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getPatient(this.id);
    });
  }


  ngOnInit(): void {
    this.patientService.getAllPatienter().subscribe(types => {
        this.patienters = types;
      }, error => {
        console.log(error);
      }
    );
  }

  getPatient(id: number) {
    return this.patientService.getPatientById(id).subscribe(patient => {
      this.patientForm = new FormGroup({
        id: new FormControl(patient.id),
        patienter: new FormControl(patient.patienter.id),
        // tslint:disable-next-line:max-line-length
        name: new FormControl(patient.patienter.name, [Validators.required, Validators.pattern(/^([A-Z][^A-Z0-9\s]+)(\s[A-Z][^A-Z0-9\s]+)*$/)]),
        dayIn: new FormControl(patient.dayIn, [Validators.required]),
        dayOut: new FormControl(patient.dayOut, [Validators.required]),
        reason: new FormControl(patient.reason, [Validators.required]),
        method: new FormControl(patient.method, [Validators.required]),
        doctor: new FormControl(patient.doctor, [Validators.required]),
      });
    }, error => {
      console.log(error);
    });
  }

  submit() {
    if (this.patientForm.valid) {
      const patient = this.patientForm.value;
      this.patientService.getPatienterById(patient.patienter).subscribe(patienter => {
        patient.patienter = {
          id: patienter.id,
          name: patienter.name
        };
        this.patientService.editPatient(this.id, patient).subscribe(() => {
          this.toast.success('Cập nhật thành công', 'Thông báo');
        }, e => {
          console.log(e);
        }, () => {
          this.router.navigate(['/']);
        });
      });
    }

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
    name: [
      {type: 'required', message: 'Enter Name'},
      {type: 'pattern', message: 'First Letter Must Be Capitalized'}
    ],
    birthDay: [
      {type: 'required', message: 'Enter Birth Day'},
    ],
    gender: [
      {type: 'required', message: 'Enter Gender'},
    ],
    idCard: [
      {type: 'required', message: 'Enter Id Card'},
      {type: 'pattern', message: 'Enter Includes 9 Numbers From 0-9'}
    ],
    phone: [
      {type: 'required', message: 'Enter Phone Number'},
      {type: 'pattern', message: 'Enter Phone Number 090xxxxxxxx or (+84)xxxxxxxx'}
    ],
    address: [
      {type: 'required', message: 'Enter Address'}
    ],
    email: [
      {type: 'required', message: 'Enter Email'},
      {type: 'email', message: 'Enter Email In Format @email.email'}
    ],
    type: [
      {type: 'required', message: 'Enter Customer Type'}
    ],
  };

}

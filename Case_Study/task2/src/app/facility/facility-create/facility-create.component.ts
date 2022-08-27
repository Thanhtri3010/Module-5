import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../../service/facility.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  facilityForm: FormGroup = new FormGroup({
    id: new FormControl(),
    facilityType: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.pattern("^([A-Z\\p{L}]{1}[a-z\\p{L}]*)+(\\s([A-Z\\p{L}]{1}[a-z\\p{L}]*))*$")]),
    area: new FormControl('', [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
    rentCost: new FormControl('', [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
    peopleMax: new FormControl('', [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
    rentalType: new FormControl('', [Validators.required]),
    standardRoom: new FormControl('', [Validators.required]),
    descriptionOtherConvenience: new FormControl('', [Validators.required]),
    poolArea: new FormControl('', [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
    numberOfFloors: new FormControl('', [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
    facilityFree: new FormControl('', [Validators.required]),
    image: new FormControl('')

  })

  constructor(private facilityService: FacilityService,
              private router: Router,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
  }

  type = "";

  getType(type) {
    this.type = type;
  }

  submit() {
    const facility = this.facilityForm.value;
    this.facilityService.save(facility).subscribe(() => {
      this.toast.success('Added Facility Success..', 'Notification..');
      this.router.navigate(['/facility']);
    }, e => {
      console.log(e);
    });
  }
  validationMessage = {
    name: [
      {type: 'required', message: 'Enter Name'},
      {type: 'pattern', message: 'First Letter Must Be Capitalized)'}
    ],
    area: [
      {type: 'required', message: 'Enter Area'},
      {type: 'pattern', message: 'Area Greater Than 0'}
    ],
    rentCost: [
      {type: 'required', message: 'Enter Cost'},
      {type: 'pattern', message: 'Cost Greater Than 0'}
    ],
    peopleMax: [
      {type: 'required', message: 'Enter Max People'},
      {type: 'pattern', message: 'Max People Greater Than 0'}
    ],
    rentType: [
      {type: 'required', message: 'Enter Rent Type'}
    ],
    facilityType: [
      {type: 'required', message: 'Enter Facility Type'}
    ],
    poolArea: [
      {type: 'pattern', message: ' Pool Area Greater Than 0'}
    ],
    numberFloor: [
      {type: 'pattern', message: 'Number Floor Greater Than 0'}
    ],
  }
}

import {Component, OnInit} from '@angular/core';
import {FacilityService} from "../../service/facility.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facilityForm: FormGroup;
  id: number;

  constructor(private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const facility = this.findById(this.id);
      this.facilityForm = new FormGroup({
        id: new FormControl(facility.id),
        facilityType: new FormControl(facility.facilityType, [Validators.required]),
        name: new FormControl(facility.name, [Validators.required, Validators.pattern("^([A-Z\\p{L}]{1}[a-z\\p{L}]*)+(\\s([A-Z\\p{L}]{1}[a-z\\p{L}]*))*$")]),
        area: new FormControl(facility.area, [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
        rentCost: new FormControl(facility.rentCost, [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
        peopleMax: new FormControl(facility.peopleMax, [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
        rentalType: new FormControl(facility.rentalType, [Validators.required]),
        standardRoom: new FormControl(facility.standardRoom, [Validators.required]),
        descriptionOtherConvenience: new FormControl(facility.descriptionOtherConvenience, [Validators.required]),
        poolArea: new FormControl(facility.poolArea, [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
        numberOfFloors: new FormControl(facility.numberOfFloors, [Validators.required, Validators.pattern("^[1-9]+\\d*")]),
        facilityFree: new FormControl(facility.facilityFree, [Validators.required]),
      });
    });
  }

  ngOnInit(): void {
  }

  type = "";

  getType(type) {
    this.type = type;
  }

  findById(id: number) {
    return this.facilityService.findById(id);
  }

  update(id: number) {
    const facility = this.facilityForm.value;
    this.facilityService.update(id, facility);
    alert('Update Successful');
    this.router.navigate(['/facility']);
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

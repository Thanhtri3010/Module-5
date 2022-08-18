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
        facilityType: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required, Validators.pattern("^([\\p{Lu}][\\p{Ll}]{1,8})(\\s([\\p{Lu}]|[\\p{Lu}][\\p{Ll}]{1,10})){0,5}$")]),
        area: new FormControl('', [Validators.required, Validators.pattern("^[1-9]+\\\\d*")]),
        rentCost: new FormControl('', [Validators.required, Validators.pattern("^[1-9]+\\\\d*")]),
        peopleMax: new FormControl('', [Validators.required, Validators.pattern("^[1-9]+\\\\d*")]),
        rentalType: new FormControl('', [Validators.required]),
        standardRoom: new FormControl('', [Validators.required]),
        descriptionOtherConvenience: new FormControl('', [Validators.required]),
        poolArea: new FormControl('', [Validators.required, Validators.pattern("^[1-9]+\\\\d*")]),
        numberOfFloors: new FormControl('', [Validators.required, Validators.pattern("^[1-9]+\\\\d*")]),
        facilityFree: new FormControl('', [Validators.required]),
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
    alert('Cập nhật thành công');
    this.router.navigate(['/facility/list']);
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

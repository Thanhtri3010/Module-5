import {Component, OnInit} from '@angular/core';
import {Facility} from "../../model/facility";
import {FacilityService} from "../../service/facility.service";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facility: Facility[] = [];
  nameDelete: string;
  idDelete: number;

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facility = this.facilityService.getAll();
  }

  oppenDelete(facility: Facility) {
    this.idDelete = facility.id
    this.nameDelete = facility.name;
  }

  delete(idDelete: number) {
    this.facilityService.delete(idDelete);
    this.ngOnInit();
  }
}

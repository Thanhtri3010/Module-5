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
  name: string;
  id: number;

  constructor(private facilityService: FacilityService) {
    this.getAllFacilityList()
  }

  ngOnInit(): void {
    this.getAllFacilityList();
  }

  getAllFacilityList() {
    this.facilityService.getAll().subscribe(data => {
      this.facility = data
    }, error => {
      console.log(error)
    });
  }

  oppenDelete(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  delete() {
   this.facilityService.delete(this.id).subscribe( data => {
     this.ngOnInit();
   },error => {
     console.log(error)
     });
  }
}

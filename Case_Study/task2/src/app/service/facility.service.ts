import {Injectable} from '@angular/core';
import {Facility} from "../model/facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor() {
  }

  facility: Facility[] = [
    {
      id: 1,
      facilityType: "Villa",
      name: "ROOM SUITE SEA VIEW",
      area:80.5,
      rentCost:150.00,
      peopleMax:2,
      rentalType:"Day",
      standardRoom:"VIP",
      descriptionOtherConvenience:"With Swimming Pool",
      poolArea:20,
      numberOfFloors:2,
      facilityFree:"N/A",
      image:"assets/img/home/suite-sea-view.jpg"
    },
    {
      id: 2,
      facilityType: "Villa",
      name: "ROOM STUDIO SUITE SEA VIEW",
      area:40.1,
      rentCost:170.00,
      peopleMax:2,
      rentalType:"Day",
      standardRoom:"VIP",
      descriptionOtherConvenience:"With Swimming Pool",
      poolArea:20,
      numberOfFloors:2,
      facilityFree:"N/A",
      image:"assets/img/home/Studio-Suite-.jpg"
    },
    {
      id: 3,
      facilityType: "Villa",
      name: "SUPERIOR ROOM WITH GARDEN VIEW",
      area:40.1,
      rentCost:190.00,
      peopleMax:2,
      rentalType:"Day",
      standardRoom:"VIP",
      descriptionOtherConvenience:"With Swimming Pool",
      poolArea:20,
      numberOfFloors:2,
      facilityFree:"N/A",
      image:"assets/img/home/Garden-Deluxe.jpg"
    },
    {
      id: 4,
      facilityType: "Villa",
      name: "GARDEN VIEW DELUXE ROOM",
      area:43.7,
      rentCost:120.00,
      peopleMax:2,
      rentalType:"Day",
      standardRoom:"VIP",
      descriptionOtherConvenience:"With Swimming Pool",
      poolArea:20,
      numberOfFloors:2,
      facilityFree:"N/A",
      image:"assets/img/home/Garden-Deluxe.jpg"
    },
    {
      id: 5,
      facilityType: "Villa",
      name: "GARDEN VIEW VILLA WITH PERSONAL POOL",
      area:320,
      rentCost:1300.00,
      peopleMax:6,
      rentalType:"Day",
      standardRoom:"VIP",
      descriptionOtherConvenience:"With Swimming Pool",
      poolArea:50,
      numberOfFloors:2,
      facilityFree:"N/A",
      image:"assets/img/home/Villas_Pool_Villas.jpg"
    },
    {
      id: 6,
      facilityType: "Villa",
      name: "SEA VILLA WITH PERSONAL POOL",
      area:900,
      rentCost:1500.00,
      peopleMax:6,
      rentalType:"Day",
      standardRoom:"VIP",
      descriptionOtherConvenience:"With Swimming Pool",
      poolArea:200,
      numberOfFloors:2,
      facilityFree:"N/A",
      image:"assets/img/home/VillasBeachPoolVillas-.jpg"
    }
  ];

  getAll(){
    return this.facility;
  }
}

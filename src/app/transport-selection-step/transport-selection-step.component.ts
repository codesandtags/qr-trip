import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transport-selection-step',
  templateUrl: './transport-selection-step.component.html',
  styleUrls: ['./transport-selection-step.component.scss']
})
export class TransportSelectionStepComponent implements OnInit {

  origin: string;
  destination: string;
  departureDate: Date;
  arrivalDate: Date;
  passengers: number;

  faresOrigin = [
    {
      hour: '15:30',
      operator: 'Bolivariano',
      serviceBus: 'Bus PREMIUM',
      fareValue: 60000
    },
    {
      hour: '16:15',
      operator: 'Bolivariano',
      serviceBus: 'Bus Standard',
      fareValue: 55000
    },
    {
      hour: '16:15',
      operator: 'Bolivariano',
      serviceBus: 'Bus PREMIUM',
      fareValue: 55000
    },
    {
      hour: '13:15',
      operator: 'Coopetran',
      serviceBus: 'Bus Standard',
      fareValue: 58000
    },
    {
      hour: '14:15',
      operator: 'Coopetran',
      serviceBus: 'Bus Standard',
      fareValue: 58000
    },
    {
      hour: '17:15',
      operator: 'Coopetran',
      serviceBus: 'Bus PREMIUM',
      fareValue: 62000
    },
    {
      hour: '20:30',
      operator: 'Coopetran',
      serviceBus: 'Bus Standard',
      fareValue: 58000
    }
  ];

  faresDestination = [
    {
      hour: '07:22',
      operator: 'Bolivariano',
      serviceBus: 'Bus PREMIUM',
      fareValue: 60000
    },
    {
      hour: '09:20',
      operator: 'Bolivariano',
      serviceBus: 'Bus Standard',
      fareValue: 55000
    },
    {
      hour: '11:50',
      operator: 'Bolivariano',
      serviceBus: 'Bus PREMIUM',
      fareValue: 55000
    },
    {
      hour: '12:23',
      operator: 'Coopetran',
      serviceBus: 'Bus Standard',
      fareValue: 58000
    }
  ];

  constructor(private router: Router) {
  }

  selectDepartureFare(fare) {
    const departure_fare = JSON.stringify(fare);
    sessionStorage.setItem('departure_fare', departure_fare);
  }

  selectArrivalFare(fare) {
    const arrival_fare = JSON.stringify(fare);
    sessionStorage.setItem('arrival_fare', arrival_fare);
  }

  ngOnInit() {
    const searchTripData = JSON.parse(sessionStorage.getItem('search_trip'));
    this.origin = searchTripData.origin;
    this.destination = searchTripData.destination;
    this.departureDate = new Date(searchTripData.departureDate);
    this.arrivalDate = new Date(searchTripData.arrivalDate);
    this.passengers = searchTripData.passengers;
  }

  public validateSelection(): void {
    this.router.navigate(['/pago']);
  }

}

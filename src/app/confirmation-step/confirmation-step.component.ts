import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationConstants } from '../../models/ApplicationConstants';
import { Http } from '@angular/http';

@Component({
  selector: 'app-confirmation-step',
  templateUrl: './confirmation-step.component.html',
  styleUrls: ['./confirmation-step.component.scss']
})
export class ConfirmationStepComponent implements OnInit {

  qrTrip;
  qrTripCode;

  constructor(private router: Router, private http: Http) {
  }

  ngOnInit() {
    this.qrTrip = {};
    this.getQRTrip();
    this.setSearchTrip();
    this.setSelectedFares();
    this.setPaymentData();
    console.log(this.qrTrip);
  }

  public finishConfirmation(): void {
    this.router.navigate(['/']);
  }


  public setSelectedFares() {
    const departureFareData = JSON.parse(sessionStorage.getItem('departure_fare'));
    const arrivalFareData = JSON.parse(sessionStorage.getItem('arrival_fare'));

    this.qrTrip.departureFareData = departureFareData;
    this.qrTrip.arrivalFareData = arrivalFareData;
    this.qrTrip.reservationValue = (this.qrTrip.searchTrip.passengers * 2000);
    this.qrTrip.total = departureFareData.fareValue + arrivalFareData.fareValue + this.qrTrip.reservationValue;
  }

  public setPaymentData() {
    const paymentData = JSON.parse(sessionStorage.getItem('payment_data'));

    this.qrTrip.paymentData = paymentData;
  }

  public setSearchTrip() {
    const searchTripData = JSON.parse(sessionStorage.getItem('search_trip'));

    this.qrTrip.searchTrip = searchTripData;
  }

  public getQRTrip() {
    const url = ApplicationConstants.API.BASE_PATH + ApplicationConstants.API.QR_TRIP;
    this.http.get(url)
      .subscribe(data => {
        this.qrTripCode = data.text();
      });
  }

}

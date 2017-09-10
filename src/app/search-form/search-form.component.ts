import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { City } from '../../models/City';
import { ApplicationConstants } from '../../models/ApplicationConstants';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  searchForm: FormGroup;
  public cities: Array<City>[];

  constructor(private router: Router, private http: Http, private formBuilder: FormBuilder) {
    this.searchForm = formBuilder.group({
      'origin': [null, Validators.required],
      'destination': [null, Validators.required],
      'departureDate': [null],
      'arrivalDate': [null],
      'passengers': [null, Validators.required]
    });
  }

  ngOnInit() {
    this.getCities();
  }

  public validateSearch(): void {
    if (this.searchForm.valid) {
      this.saveInSessionStorage();
      this.router.navigate(['/tarifas']);
    }
  }

  public saveInSessionStorage() {
    const searchTripData = JSON.stringify(this.searchForm.getRawValue());
    sessionStorage.setItem('search_trip', searchTripData);
  }

  public getCities() {
    const url = ApplicationConstants.API.BASE_PATH + ApplicationConstants.API.CITIES;
    this.http.get(url)
      .subscribe(data => {
        this.cities = data.json();
      });
  }


}

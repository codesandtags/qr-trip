import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { City } from '../../models/City';
import { ApplicationConstants } from '../../models/ApplicationConstants';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  public cities: Array<City>[];

  constructor(private router: Router, private http: Http) {
  }

  ngOnInit() {
    this.getCities();
  }

  public validateSearch(): void {
    this.router.navigate(['/tarifas']);
  }

  public getCities() {
    const url = ApplicationConstants.API.BASE_PATH + ApplicationConstants.API.CITIES;
    this.http.get(url)
      .subscribe(data => {
        this.cities = data.json();
      });
  }


}

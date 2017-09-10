import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transport-selection-step',
  templateUrl: './transport-selection-step.component.html',
  styleUrls: ['./transport-selection-step.component.scss']
})
export class TransportSelectionStepComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  public validateSelection(): void {
    this.router.navigate(['/pago']);
  }

}

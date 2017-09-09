import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-step',
  templateUrl: './payment-step.component.html',
  styleUrls: ['./payment-step.component.css']
})
export class PaymentStepComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  public validatePayment(): void {
    this.router.navigate(['/confirmacion']);
  }

}

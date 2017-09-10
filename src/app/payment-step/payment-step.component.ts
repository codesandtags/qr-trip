import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-step',
  templateUrl: './payment-step.component.html',
  styleUrls: ['./payment-step.component.scss']
})
export class PaymentStepComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  public validatePayment(): void {
    this.router.navigate(['/confirmacion']);
  }

  selectPaymentMethod(payment) {
    let paymentMethod;
    let methodSelected = 'N/A';

    switch (payment) {
      case 'VISA':
      case 'MASTERCARD':
      case 'AMEX':
        paymentMethod = 'CREDIT_CARD';
        methodSelected = payment;
        break;
      case 'PSE':
        paymentMethod = 'TRANSFER_BANK';
        break;
      default:
        paymentMethod = 'CASH_IN_TERMINAL';
    }

    const paymentData = {
      paymentMethod: paymentMethod,
      methodSelected: methodSelected
    };

    sessionStorage.setItem('payment_data', JSON.stringify(paymentData));
  }

}

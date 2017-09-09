import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-step',
  templateUrl: './confirmation-step.component.html',
  styleUrls: ['./confirmation-step.component.css']
})
export class ConfirmationStepComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  public finishConfirmation(): void {
    this.router.navigate(['/']);
  }

}

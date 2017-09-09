import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { Error404Component } from './error-404/error-404.component';
import { PaymentStepComponent } from './payment-step/payment-step.component';
import { ConfirmationStepComponent } from './confirmation-step/confirmation-step.component';
import { TransportSelectionStepComponent } from './transport-selection-step/transport-selection-step.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full',
  },
  {
    path: 'tarifas',
    component: TransportSelectionStepComponent,
    pathMatch: 'full',
  },
  {
    path: 'pago',
    component: PaymentStepComponent,
    pathMatch: 'full',
  },
  {
    path: 'confirmacion',
    component: ConfirmationStepComponent,
    pathMatch: 'full',
  },
  {
    path: '404',
    component: Error404Component,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutes {
}

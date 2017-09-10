import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { TopDestinationComponent } from './top-destination/top-destination.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { AppRoutes } from './app.routes';
import { Error404Component } from './error-404/error-404.component';
import { PaymentStepComponent } from './payment-step/payment-step.component';
import { TransportSelectionStepComponent } from './transport-selection-step/transport-selection-step.component';
import { ConfirmationStepComponent } from './confirmation-step/confirmation-step.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SearchFormComponent,
    TopDestinationComponent,
    HowItWorksComponent,
    FooterComponent,
    LandingComponent,
    Error404Component,
    PaymentStepComponent,
    TransportSelectionStepComponent,
    ConfirmationStepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app lero lero';

  constructor() {
    setTimeout(() => {
      console.log('listones');
    }, 5000);
  }
}

import { Component } from '@angular/core';

export const MY_DATE_FORMATS = {

    parse: {

      dateInput: 'DD/MM/yyyy',

    },

    display: {

      dateInput: 'DD/MM/yyyy',

      monthYearLabel: 'MMMM YYYY',

      dateA11yLabel: 'LL',

      monthYearA11yLabel: 'MMMM YYYY'

    },

};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AgenceTestSite';
}

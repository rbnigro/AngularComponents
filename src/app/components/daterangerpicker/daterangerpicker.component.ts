import { Component } from '@angular/core';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-daterangerpicker',
  templateUrl: './daterangerpicker.component.html',
  standalone: true,
  imports: [ MatFormFieldModule, MatDatepickerModule, MatNativeDateModule ],
  providers: [ provideNativeDateAdapter() ],
  styleUrls: ['./daterangerpicker.component.scss'],
//  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaterangerpickerComponent {

}

// function providerNativeDateAdapter() {
//   return new NativeDateAdapter('pt-BR'); 
// }


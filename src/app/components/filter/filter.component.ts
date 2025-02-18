import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFilterOptions } from '../../interfaces/user/filter-options.interface';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})

export class FilterComponent {
  // myGroup: FormGroup;
  filterOptions: IFilterOptions = {
    name: '',
    startDate: '',
    endDate: '',
    status: '',
  };

  dateSelected(date: any) {
    console.log(date);
   // console.log(date,getMonth());
  }


// export class FilterComponent implements OnInit {
range!: FormGroup;
foods = [
    {
      value: 'Sim',
      viewValue: 'Ativo',
    },
    {
      value: 'Não',
      viewValue: 'Inativo',
    }
];
  // ngOnInit() {
  //   this.range = new FormGroup({
  //     start: new FormControl(''),
  //     end: new FormControl('')
  //   });
  // }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IFilterOptions } from '../../interfaces/user/filter-options.interface';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent implements OnInit {
  range!: FormGroup;

  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  };

  ngOnInit() {
    this.range = new FormGroup({
      inicio: new FormControl<Date | null>(null),
      fim: new FormControl<Date | null>(null),
    });

    this.range.valueChanges.subscribe(value => {
      // console.log("Data Inicial = ", value.inicio);
      // console.log("Data Final = ", value.fim);

      this.filterOptions.startDate = value.inicio ?? undefined;
      this.filterOptions.endDate = value.fim ?? undefined;
    });
  }

  statusList = [
    {
      value: true,
      description: 'Ativo',
    },
    {
      value: false,
      description: 'Inativo',
    },
  ];

  onFilter() {
    console.log(this.filterOptions);
  }
}

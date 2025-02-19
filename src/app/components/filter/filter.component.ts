import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output('onFilter') onFilterEmitt = new EventEmitter<IFilterOptions>();

  onFilter() {
    // console.log(this.filterOptions);
    this.onFilterEmitt.emit(this.filterOptions);
  }

  clear() {
    this.filterOptions = {
      name: undefined,
      startDate: undefined,
      endDate: undefined,
      status: undefined,
    };

    this.range.reset();
    this.onFilter();
  }

  validateName(event: any) {
    const cleanedValue = event.target.value.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/g, '');
    this.filterOptions.name = cleanedValue;
    event.target.value = cleanedValue;
  }
}

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
    name: '',
    startDate: undefined,
    endDate: undefined,
    status: '',
  };

  // this.range.valueChanges.subscribe((value) => {
  //   this.filterOptions.startDate = value.inicio ?? undefined;
  //   this.filterOptions.endDate = value.fim ?? undefined;
  // });

  ngOnInit() {
    this.range = new FormGroup({
      inicio: new FormControl<Date | null>(null),
      fim: new FormControl<Date | null>(null),
    });

    this.range.valueChanges.subscribe(value => {
      console.log("Data Inicial:", value.inicio);
      console.log("Data Final:", value.fim);

      this.filterOptions.startDate = value.inicio ?? undefined;
      this.filterOptions.endDate = value.fim ?? undefined;
    });
  }

  dateSelected(event: Date | null, field: 'inicio' | 'fim') {
    console.log(`Alteração detectada no campo ${field}:`, event);

    const currentValue = this.range.get(field)?.value;
    if (currentValue !== event) {
      this.range.get(field)?.setValue(event);
    }
  }

  status = [
    {
      value: 'Sim',
      viewValue: 'Ativo',
    },
    {
      value: 'Não',
      viewValue: 'Inativo',
    },
  ];
}

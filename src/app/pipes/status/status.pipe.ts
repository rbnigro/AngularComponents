import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: false
})
export class StatusPipe implements PipeTransform {

  transform(status: boolean): string {
    const INVALID_STRATUS = status === undefined || status === null;
    return !status || INVALID_STRATUS ? 'Inativo' : 'Ativo';
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: false
})
export class PhonePipe implements PipeTransform {

  transform(phone: string): string {
    if (!phone?.match(/^\d{10,11}$/)) {
      return `Telefone Inválido: [${phone ?? 'desconhecido'}]`;
    }
    const ddd = phone.substring(0, 2);
    const firstPart = phone.length === 11 ? phone.substring(2, 7) : phone.substring(2, 6);
    const secondPart = phone.length === 11 ? phone.substring(7) : phone.substring(6);

    return `(${ddd}) ${firstPart}-${secondPart}`;
  }
}

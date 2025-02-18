import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../../interfaces/user/address.interface';

@Pipe({
  name: 'address',
  standalone: false
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress): string {
    const INVALID_ADDRESS = !address ||
      !address.rua ||
      !address.numero ||
      !address.cidade ||
      !address.estado;

      if (INVALID_ADDRESS) {
        return 'Endereço Inválido';
      }

      return `${address.rua}, ${address.numero} - ${address.cidade} - ${address.estado}`
  }
}

import { NgModule } from "@angular/core";
import { PhonePipe } from './phone/phone.pipe';
import { AddressPipe } from './address/address.pipe';
import { StatusPipe } from './status/status.pipe';
import { DashIfEmptyPipe } from "./dash-if-empty/dash-if-empty.pipe";


@NgModule({
  declarations: [
    PhonePipe,
    AddressPipe,
    StatusPipe,
    DashIfEmptyPipe,
  ],
  exports: [
    PhonePipe,
    AddressPipe,
    StatusPipe,
    DashIfEmptyPipe
  ],
})
export class PipesModule { }

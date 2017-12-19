import { Injectable } from '@angular/core';

@Injectable()
export class ExchangeRateService {
  Us:number = 1;
  Kr:number = this.Us * 1085;
  Jp:number = this.Us * 112.67;
  Euro:number = this.Us * 0.85;
  Uk:number = this.Us * 0.75;
}

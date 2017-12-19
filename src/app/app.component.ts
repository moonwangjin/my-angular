import { ExchangeRateService } from './exchange-rate.service';
import { MemberService } from './member.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {   
  exr:ExchangeRateService;
  members:Object;   
  constructor(member:MemberService, Exr:ExchangeRateService){    
    this.members = member.Product;
    this.exr = Exr;
     console.log(member.Product);        
  }    
}
import { MemberService } from './member.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {   
  Us:number = 1085;
  members; 
  constructor(member:MemberService){    
    this.members = member.Product;
     console.log(member.Product);        
  }    
}
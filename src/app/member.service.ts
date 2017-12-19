import { Injectable } from '@angular/core';

@Injectable()
export class MemberService {    
  Product = [
    {'id':0, 'name':"shoes", 'price':35.99},
    {'id':1, 'name':"tee", 'price':33.48}
  ];  
}

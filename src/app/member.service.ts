import { Injectable } from '@angular/core';

@Injectable()
export class MemberService {    
  Product = [
    {'id':0, 'name':"삼성모니터", 'price':349.99},
    {'id':1, 'name':"아이폰", 'price':99.99},
    {'id':2, 'name':"Nike Shoes", 'price':10.99},
    {'id':3, 'name':"ASOS hoodie", 'price':5.99},
  ];  
}

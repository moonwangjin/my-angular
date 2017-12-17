import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.scss']
})
export class MoonComponent implements OnInit {
  greeting = "Hello";
  
  constructor() { }

  ngOnInit() {
  }
  leeButton(){
    console.log('lee button');
  }
}

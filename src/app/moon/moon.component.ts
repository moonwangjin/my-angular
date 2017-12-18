import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.scss']
})
export class MoonComponent implements OnInit {
  greeting = "Hello";
  //heroes:string[]= ['Superman','Hitgirl','Batman','Man'];
  heroes:[{name:string}]= [{name:'Superman'}, {name:'Hitgirl'},{name:'Batman'},{name:'man'}];
  
  
  constructor() { }

  ngOnInit() {
  }
  leeButton(){
    console.log('lee button');
  }
}

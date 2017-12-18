import { Component } from '@angular/core';
import { HeroesService } from './heroes.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  
 heroes; //데이터를 채울 변수생성 /*의존성 주입

 constructor(hero:HeroesService){//constructor를 이용해 서비스 사용
  this.heroes = hero.Hero;
 }
}
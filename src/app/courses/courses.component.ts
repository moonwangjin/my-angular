import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  title: string = 'Angular for Superman';
  register:string = "Superman";

  //event bubble
  onButton($event){
    //$event.stopPropagation();
    console.log("this is a event",$event)
  }
  onInnerBlock($event){
    console.log("this is a InnerBlock",$event)
  }
  onOuterBlock($event){
    console.log("this is a OuterBlock",$event)
  }
  

}

import { MemberService } from './member.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HeroesService } from './heroes.service';
import { AppComponent } from './app.component';
import { MoonComponent } from './moon/moon.component';
import { CoursesComponent } from './courses/courses.component';
import { RoundPipePipe } from './round-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MoonComponent,
    CoursesComponent,
    RoundPipePipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [HeroesService, MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HeroesService } from './heroes.service';
import { AppComponent } from './app.component';
import { MoonComponent } from './moon/moon.component';
import { CoursesComponent } from './courses/courses.component';


@NgModule({
  declarations: [
    AppComponent,
    MoonComponent,
    CoursesComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { MemberService } from './member.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MoonComponent } from './moon/moon.component';
import { CoursesComponent } from './courses/courses.component';
import { RoundPipe } from './round-pipe.pipe';
import { ExchangeRateService } from './exchange-rate.service';


@NgModule({
  declarations: [
    AppComponent,
    MoonComponent,
    CoursesComponent,
    RoundPipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [MemberService,ExchangeRateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

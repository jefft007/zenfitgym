import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { RegistrationComponent } from './registration/registration.component';
import { PersonalinfoComponent } from './personal-info/personal-info.component'; // ✅ consistent casing
import { BeginnerComponent } from './beginner/beginner.component';
import { FormsModule } from '@angular/forms';
import { MembershipComponent } from './membership/membership.component';
import { TimerComponent } from './timer/timer.component';
import { ModerateComponent } from './moderate/moderate.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegistrationComponent,
    PersonalinfoComponent,
    MembershipComponent,
    BeginnerComponent,
    TimerComponent,
    ModerateComponent  // ✅ fixed casing here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

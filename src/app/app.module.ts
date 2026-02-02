import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { WeightlossComponent } from './weightloss/weightloss.component';
import { NoequipmentComponent } from './noequipment/noequipment.component';
import { StrengthComponent } from './strength/strength.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { LoginComponent } from './login/login.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { DietComponent } from './diet/diet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegistrationComponent,
    PersonalinfoComponent,
    MembershipComponent,
    BeginnerComponent,
    TimerComponent,
    ModerateComponent,
    WeightlossComponent,
    NoequipmentComponent,
    StrengthComponent,
    ProfileComponent,
    EditProfileComponent,
    EditPasswordComponent,
    PersonalDataComponent,
    ConfirmComponent,
    LoginComponent,
    EquipmentsComponent,
    DietComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

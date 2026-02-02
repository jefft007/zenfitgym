import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { RegistrationComponent } from './registration/registration.component';
import { PersonalinfoComponent } from './personal-info/personal-info.component';
import { MembershipComponent } from './membership/membership.component';
import { BeginnerComponent } from './beginner/beginner.component';
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

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'equipments', component: EquipmentsComponent },
  { path: 'diet', component: DietComponent },
  { path: 'registration', component: RegistrationComponent },     // ✅ matches navigation method
  { path: 'personal-info', component: PersonalinfoComponent },
  { path: 'personal-data', component: PersonalDataComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'beginner', component: BeginnerComponent },
  { path: 'moderate', component: ModerateComponent },
  { path: 'weightloss', component: WeightlossComponent },
  { path: 'noequipment', component: NoequipmentComponent }, // ✅ proper route and casing
  { path: 'strength', component: StrengthComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'edit-password', component: EditPasswordComponent } // ✅ proper route and casing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
